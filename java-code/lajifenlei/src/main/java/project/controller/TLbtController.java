package project.controller;

import project.entity.TLbt;
import project.service.TLbtService;
import project.util.ResponseUtil;
import project.util.UUIDUtil;
import com.alibaba.fastjson2.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 *  轮播图前端控制器
 * </p>
 *
 * @author YJR
 * @since 2023-06-27
 */
@RestController
@RequestMapping("/api/lbt/v1")
@Slf4j
public class TLbtController {

    @Resource
    private TLbtService lbtService;

    /**
     * 获取轮播图
     * @return
     */
    @RequestMapping(value = "/getAll",method = RequestMethod.POST)
    public JSONObject getAll(){
        QueryWrapper<TLbt> wrapper = new QueryWrapper<>();
        wrapper.lambda().eq(TLbt::getnDel,0);
        List<TLbt> list = lbtService.list(wrapper);
        return ResponseUtil.getSuccessResponseBody(list);
    }

    /**
     * 添加或者更新商品分类
     * @param lbt
     * @return
     */
    @RequestMapping(value="/addOrUpdate",method = RequestMethod.POST)
    public JSONObject addOrUpdate(@RequestBody TLbt lbt) {
        try {
            if (StringUtils.isBlank(lbt.getcId())) {
                lbt.setcId(UUIDUtil.getUUID());
            }
            lbtService.addOrUpdate(lbt);
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
        // 获取轮播图名
        String flmc = param.getString("flmc");
        Page<TLbt> page = new Page<TLbt>();
        page.setSize(10);
        if(current != null){
            page.setCurrent(current);
        }else{
            page.setCurrent(1);
        }

        QueryWrapper<TLbt> wrapper = new QueryWrapper<>();
        // 未删除的
        wrapper.lambda().eq(TLbt::getnDel,0);
        if(StringUtils.isNotBlank(flmc)){
            wrapper.lambda().like(TLbt::getcDescribe,flmc);
        }
        // 获取查询返回结果
        Page<TLbt> pageSelect = lbtService.page(page, wrapper);
        JSONObject object = new JSONObject();
        object.put("list",pageSelect.getRecords());
        object.put("total",pageSelect.getTotal());
        return ResponseUtil.getSuccessResponseBody(object);
    }

    @RequestMapping(value = "/del",method = RequestMethod.POST)
    public JSONObject del(@RequestBody TLbt tLbt){
        TLbt tSpflNew = new TLbt();
        tSpflNew.setcId(tLbt.getcId());
        tSpflNew.setnDel(1);
        lbtService.updateById(tSpflNew);
        return ResponseUtil.getSuccessResponseBody(null);
    }

    @RequestMapping(value = "/wx/getByid",method = RequestMethod.POST)
    public JSONObject getById(@RequestBody TLbt tLbt){
        return ResponseUtil.getSuccessResponseBody(lbtService.getById(tLbt.getcId()));
    }
}
