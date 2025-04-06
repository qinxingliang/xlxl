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
import project.entity.TVideo;
import project.entity.TVideo;
import project.service.TVideoService;
import project.util.ResponseUtil;
import project.util.UUIDUtil;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * 视频表 前端控制器
 * </p>
 */
@Slf4j
@RestController
@RequestMapping("/api/video/v1")
public class TVideoController {
    
    @Resource
    private TVideoService videoService;
    /**
     * 获取轮播图
     * @return
     */
    @RequestMapping(value = "/wx/getAll",method = RequestMethod.POST)
    public JSONObject getAll(){
        QueryWrapper<TVideo> wrapper = new QueryWrapper<>();
        List<TVideo> list = videoService.list(wrapper);
        return ResponseUtil.getSuccessResponseBody(list);
    }

    /**
     * 添加或者更新商品分类
     * @param lbt
     * @return
     */
    @RequestMapping(value="/addOrUpdate",method = RequestMethod.POST)
    public JSONObject addOrUpdate(@RequestBody TVideo lbt) {
        try {
            if (StringUtils.isBlank(lbt.getcId())) {
                lbt.setcId(UUIDUtil.getUUID());
                lbt.setDtCreateTime(LocalDateTime.now());
            }
            videoService.saveOrUpdate(lbt);
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
        Page<TVideo> page = new Page<TVideo>();
        page.setSize(10);
        if(current != null){
            page.setCurrent(current);
        }else{
            page.setCurrent(1);
        }

        QueryWrapper<TVideo> wrapper = new QueryWrapper<>();

        // 获取查询返回结果
        Page<TVideo> pageSelect = videoService.page(page, wrapper);
        JSONObject object = new JSONObject();
        object.put("list",pageSelect.getRecords());
        object.put("total",pageSelect.getTotal());
        return ResponseUtil.getSuccessResponseBody(object);
    }

    @RequestMapping(value = "/del",method = RequestMethod.POST)
    public JSONObject del(@RequestBody TVideo tVideo){
        return ResponseUtil.getSuccessResponseBody(videoService.removeById(tVideo));
    }

    @RequestMapping(value = "/wx/getByid",method = RequestMethod.POST)
    public JSONObject getById(@RequestBody TVideo tVideo){
        return ResponseUtil.getSuccessResponseBody(videoService.getById(tVideo.getcId()));
    }
}
