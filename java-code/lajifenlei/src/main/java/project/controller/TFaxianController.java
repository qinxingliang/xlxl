package project.controller;

import com.alibaba.fastjson2.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import project.entity.TFaxian;
import project.entity.TFaxian;
import project.service.TFaxianService;
import project.util.ResponseUtil;
import project.util.UUIDUtil;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * 发现表 前端控制器
 * </p>
 *

 */
@Slf4j
@RestController
@RequestMapping("/api/faxian/v1")
public class TFaxianController {
    @Resource
    private TFaxianService faxianService;
    /**
     * 获取发现
     * @return
     */
    @RequestMapping(value = "/wx/getAll",method = RequestMethod.POST)
    public List<TFaxian> getAll(){
        return faxianService.getAll();
    }

    /**
     * 添加或者更新商品分类
     * @param lbt
     * @return
     */
    @RequestMapping(value="/addOrUpdate",method = RequestMethod.POST)
    public JSONObject addOrUpdate(@RequestBody TFaxian lbt) {
        try {
            if (StringUtils.isBlank(lbt.getcId())) {
                lbt.setcId(UUIDUtil.getUUID());
                lbt.setnLll(0);
                lbt.setDtCreateTime(LocalDateTime.now());
            }
            faxianService.saveOrUpdate(lbt);
            return ResponseUtil.getSuccessResponseBody(null);
        } catch (Exception e) {
            log.error("addOrUpdate出现异常", e);
            return ResponseUtil.getErrorResponseBody(null, "服务出现异常");
        }
    }
    
    /**
     *  分页查询数据
     */
    @RequestMapping(value="/select",method = RequestMethod.POST)
    public JSONObject selectSpfl(@RequestBody JSONObject param){
        // 获取页数
        Integer current = param.getInteger("current");
        // 获取发现名
        String flmc = param.getString("flmc");
        Page<TFaxian> page = new Page<TFaxian>();
        page.setSize(10);
        if(current != null){
            page.setCurrent(current);
        }else{
            page.setCurrent(1);
        }

        QueryWrapper<TFaxian> wrapper = new QueryWrapper<>();
        if(StringUtils.isNotBlank(flmc)){
            wrapper.lambda().like(TFaxian::getcTitle,flmc);
        }
        // 获取查询返回结果
        Page<TFaxian> pageSelect = faxianService.page(page, wrapper);
        JSONObject object = new JSONObject();
        object.put("list",pageSelect.getRecords());
        object.put("total",pageSelect.getTotal());
        return ResponseUtil.getSuccessResponseBody(object);
    }

    @RequestMapping(value = "/del",method = RequestMethod.POST)
    public JSONObject del(@RequestBody TFaxian tLbt){
        TFaxian tSpflNew = new TFaxian();
        tSpflNew.setcId(tLbt.getcId());
        faxianService.updateById(tSpflNew);
        return ResponseUtil.getSuccessResponseBody(null);
    }

    @RequestMapping(value = "/wx/getByid",method = RequestMethod.POST)
    public JSONObject getById(@RequestBody TFaxian tLbt){
        return ResponseUtil.getSuccessResponseBody(faxianService.getById(tLbt.getcId()));
    }

    @RequestMapping(value = "/wx/liulan",method = RequestMethod.POST)
    public boolean dianzan(@RequestBody TFaxian tLbt){
        UpdateWrapper<TFaxian> wrapper = new UpdateWrapper<>();
        wrapper.setSql(" n_lll = n_lll + 1");
        wrapper.lambda().eq(TFaxian::getcId,tLbt.getcId());
        return faxianService.update(wrapper);
    }
}
