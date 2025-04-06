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
import project.entity.TSinger;
import project.entity.TSinger;
import project.service.TSingerService;
import project.service.TSingerService;
import project.util.ResponseUtil;
import project.util.UUIDUtil;

import javax.annotation.Resource;

/**
 * <p>
 * 歌手表 前端控制器
 * </p>
 *

 */
@RestController
@Slf4j
@RequestMapping("api/singer/v1")
public class TSingerController {

    @Resource
    private TSingerService singerService;

    /**
     * 获取歌手
     * @return
     */
    @RequestMapping(value = "/getAll",method = RequestMethod.POST)
    public JSONObject getSpfl(){
        QueryWrapper<TSinger> wrapper = new QueryWrapper<>();
        JSONObject object = new JSONObject();
        object.put("list", singerService.list(wrapper));
        return ResponseUtil.getSuccessResponseBody(object);
    }

    /**
     *  获取歌手 首页展示的
     */
    @RequestMapping(value = "/wx/getSpflSy",method = RequestMethod.POST)
    public JSONObject getSpflSy(){
        QueryWrapper<TSinger> wrapper = new QueryWrapper<>();
        JSONObject object = new JSONObject();
        object.put("list", singerService.list(wrapper));
        return ResponseUtil.getSuccessResponseBody(object);
    }

    /**
     *  获取歌手
     */
    @RequestMapping(value = "/wx/getSpflAll",method = RequestMethod.POST)
    public JSONObject getSpflAll(@RequestBody JSONObject param){
        String name = param.getString("name");
        String show = param.getString("show");

        QueryWrapper<TSinger> wrapper = new QueryWrapper<>();
        if(StringUtils.isNotBlank(name)){
            wrapper.lambda().like(TSinger::getcName,name);
        }
        if(StringUtils.isNotBlank(show)){
            wrapper.lambda().eq(TSinger::getnShow,1);
        }
        JSONObject object = new JSONObject();
        object.put("list", singerService.list(wrapper));
        return ResponseUtil.getSuccessResponseBody(object);
    }
    /**
     * 添加或者更新商品歌手
     * @param spfl
     * @return
     */
    @RequestMapping(value="/addOrUpdate",method = RequestMethod.POST)
    public JSONObject addOrUpdate(@RequestBody TSinger spfl) {
        try {
            if(StringUtils.isBlank(spfl.getcId())){
                spfl.setcId(UUIDUtil.getUUID());
            }
            singerService.saveOrUpdate(spfl);
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
        // 获取歌手名
        String flmc = param.getString("flmc");
        Page<TSinger> page = new Page<TSinger>();

        page.setSize(10);
        if(current != null){
            page.setCurrent(current);
        }else{
            page.setCurrent(1);
        }

        QueryWrapper<TSinger> wrapper = new QueryWrapper<>();
        // 获取查询返回结果
        Page<TSinger> pageSelect = singerService.page(page, wrapper);
        JSONObject object = new JSONObject();
        object.put("list",pageSelect.getRecords());
        object.put("total",pageSelect.getTotal());
        return ResponseUtil.getSuccessResponseBody(object);
    }

    /**
     * 删除商品歌手
     * @param tSpfl
     * @return
     */
    @RequestMapping(value = "/del",method = RequestMethod.POST)
    public JSONObject del(@RequestBody TSinger tSpfl){
        TSinger tSpflNew = new TSinger();
        singerService.updateById(tSpflNew);
        return ResponseUtil.getSuccessResponseBody(null);
    }
}
