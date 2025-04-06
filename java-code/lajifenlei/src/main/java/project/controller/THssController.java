package project.controller;

import com.alibaba.fastjson2.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import project.entity.THss;
import project.service.THssService;
import project.util.ResponseUtil;
import project.util.UUIDUtil;

import javax.annotation.Resource;


/**
 * <p>
 * 回收商表 前端控制器
 * </p>
 *

 */
@RestController
@RequestMapping("/api/hss/v1")
@Slf4j
public class THssController {
    @Resource
    private THssService hssService;


    /**
     * 添加或者更新 回收商
     * @param tHss
     * @return
     */
    @RequestMapping(value="/addOrUpdate",method = RequestMethod.POST)
    public JSONObject addOrUpdate(@RequestBody THss tHss) {
        try {
            if (StringUtils.isBlank(tHss.getcId())) {
                tHss.setcId(UUIDUtil.getUUID());
            }
            hssService.saveOrUpdate(tHss);
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
        String id = param.getString("id");
        return ResponseUtil.getSuccessResponseBody(hssService.removeById(id));
    }
    /**
     *  分页查询数据
     */
    @RequestMapping(value="/wx/select",method = RequestMethod.POST)
    public JSONObject wxSelect(@RequestBody JSONObject param){
        return ResponseUtil.getSuccessResponseBody(hssService.list());
    }

    /**
     *  分页查询数据
     */
    @RequestMapping(value="/select",method = RequestMethod.POST)
    public JSONObject select(@RequestBody JSONObject param){
        // 获取页数
        Integer current = param.getInteger("current");
        // 获取回收商名称
        String name = param.getString("name");
        // 回收商地址
        String address = param.getString("address");

        Page<THss> page = new Page<THss>();
        page.setSize(10);
        if(current != null){
            page.setCurrent(current);
        }else{
            page.setCurrent(1);
        }


        QueryWrapper<THss> wrapper = new QueryWrapper<>();
        if(StringUtils.isNotBlank(name)){
            wrapper.lambda().like(THss::getcName,name);
        }
        if(StringUtils.isNotBlank(address)){
            wrapper.lambda().like(THss::getcAddress,address);
        }

        // 获取查询返回结果
        Page<THss> pageSelect = hssService.page(page, wrapper);
        JSONObject object = new JSONObject();
        object.put("list",pageSelect.getRecords());
        object.put("total",pageSelect.getTotal());
        return ResponseUtil.getSuccessResponseBody(object);
    }

}
