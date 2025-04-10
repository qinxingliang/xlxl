package project.controller;

import com.alibaba.fastjson2.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import project.entity.TJifenRecord;
import project.entity.TSp;
import project.entity.TWxUser;
import project.service.TSpService;
import project.service.TWxUserService;
import project.util.ResponseUtil;
import project.util.UUIDUtil;

import javax.annotation.Resource;
import java.time.LocalDateTime;

/**
 * <p>
 *  前端控制器
 * </p>
 *

 */
@RestController
@RequestMapping("/api/sp/v1")
@Slf4j
public class TSpController {
    @Resource
    private TSpService spService;

    @Resource
    private TWxUserService wxUserService;

    @Resource
    private TJifenRecordController jifenRecordController;
    /**
     * 添加或者更新
     * @param sp
     * @return
     */
    @RequestMapping(value="/addOrUpdate",method = RequestMethod.POST)
    public JSONObject addOrUpdate(@RequestBody TSp sp) {
        try {
            if (StringUtils.isBlank(sp.getcId())) {
                sp.setcId(UUIDUtil.getUUID());
                sp.setnView(0);
                sp.setnYishou(0);
                sp.setDtCreateTime(LocalDateTime.now());
            }
            spService.saveOrUpdate(sp);
            return ResponseUtil.getSuccessResponseBody(null);
        } catch (Exception e) {
            log.error("addOrUpdate出现异常", e);
            return ResponseUtil.getErrorResponseBody(null, "服务出现异常");
        }
    }

    /**
     * 删除数据
     * @param param
     * @return
     */
    @RequestMapping(value="/del",method = RequestMethod.POST)
    public JSONObject del(@RequestBody JSONObject param) {
      //  log.info("删除商品信息:{}",param);
        String id = param.getString("cId");
        return ResponseUtil.getSuccessResponseBody(spService.removeById(id));
    }

    /**
     * 通过id查询
     * @param param
     * @return
     */
    @RequestMapping(value="/wx/selectById",method = RequestMethod.POST)
    public TSp selectById(@RequestBody JSONObject param) {
        String cId = param.getString("cId");

        return spService.getById(cId);
    }
    /**
     * 商品兑换
     * @param param
     * @return
     */
    @RequestMapping(value="/wx/dh",method = RequestMethod.POST)
    @Transactional
    public boolean dh(@RequestBody JSONObject param) {
        String cId = param.getString("cId");
        String openId = param.getString("openId");
        TSp sp = spService.getById(cId);
        // 减少用户积分
        // UpdateWrapper<TWxUser> wxUserUpdateWrapper = new UpdateWrapper<>();
        // wxUserUpdateWrapper.lambda().eq(TWxUser::getcOpenid,openId);
        // wxUserUpdateWrapper.setSql(" c_score = c_score - " + sp.getnStock());
        // wxUserService.update(wxUserUpdateWrapper);
        TWxUser user = wxUserService.getById(openId);
        if(user.getcScore() < sp.getnStock()){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }
        // 商品减少库存
        UpdateWrapper<TSp> spUpdateWrapper = new UpdateWrapper<>();
        spUpdateWrapper.lambda().eq(TSp::getcId,cId);
        spUpdateWrapper.setSql(" n_stock = n_stock - 1 , n_yishou = n_yishou + 1");
        spService.update(spUpdateWrapper);
        sp = spService.getById(cId);
        if(sp.getnStock() < 0){
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return false;
        }
        // 构建消费记录
        // 更新积分
        TJifenRecord record = new TJifenRecord();
        // 补全参数
        record.setnJifen(sp.getnJifen());
        record.setnType((byte)1);
        record.setcOpenId(openId);
        record.setcBgName(sp.getcTitle());
        record.setDtCreateTime(LocalDateTime.now());
        jifenRecordController.addorRemoveReacord(record);
        return true;
    }

    /**
     * 更新浏览量
     * @param param
     * @return
     */
    @RequestMapping(value="/wx/addLll",method = RequestMethod.POST)
    public boolean addLll(@RequestBody JSONObject param) {
        String cId = param.getString("cId");
        if(StringUtils.isNotBlank(cId)){
            UpdateWrapper<TSp> wrapper = new UpdateWrapper<>();
            wrapper.setSql(" n_view = n_view + 1");
            return spService.update(wrapper);
        }

        return false;
    }
    /**
     *  分页查询数据
     */
    @RequestMapping(value="/wx/select",method = RequestMethod.POST)
    public JSONObject wxSelect(@RequestBody JSONObject param){
        return ResponseUtil.getSuccessResponseBody(spService.list());
    }

    /**
     *  分页查询数据
     */
    @RequestMapping(value="/select",method = RequestMethod.POST)
    public JSONObject select(@RequestBody JSONObject param){
        // 获取页数
        Integer current = param.getInteger("current");
        // 获取商名称
        String name = param.getString("name");

        Page<TSp> page = new Page<TSp>();
        page.setSize(10);
        if(current != null){
            page.setCurrent(current);
        }else{
            page.setCurrent(1);
        }


        QueryWrapper<TSp> wrapper = new QueryWrapper<>();
        if(StringUtils.isNotBlank(name)){
            wrapper.lambda().like(TSp::getcTitle,name);
        }
        wrapper.lambda().orderByDesc(TSp::getDtCreateTime);
        // 获取查询返回结果
        Page<TSp> pageSelect = spService.page(page, wrapper);
        JSONObject object = new JSONObject();
        object.put("list",pageSelect.getRecords());
        object.put("total",pageSelect.getTotal());
        return ResponseUtil.getSuccessResponseBody(object);
    }

}
