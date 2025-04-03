package project.controller;

import project.entity.TCollect;
import project.service.TCollectService;
import project.util.ResponseUtil;
import project.util.UUIDUtil;
import com.alibaba.fastjson2.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 * 收藏表 前端控制器
 * </p>
 *
 * @author YJR
 * @since 2023-07-07
 */
@RestController
@RequestMapping("/api/sp/v1")
public class TCollectController {
    @Resource
    private TCollectService collectService;
    /**
     * 添加收藏
     * @param collect
     * @return
     */
    @RequestMapping(value = "/wx/addCollect",method = RequestMethod.POST)
    public JSONObject addCollect(@RequestBody TCollect collect){
        if(StringUtils.isBlank(collect.getcId())){
            collect.setcId(UUIDUtil.getUUID());
        }
        boolean save = collectService.save(collect);
        if(save){
            return ResponseUtil.getSuccessResponseBody(null);
        }else{
            return ResponseUtil.getErrorResponseBody(null,"保存失败");
        }
    }

    /**
     * 获取收藏
     * @param param
     * @return
     */
    @RequestMapping(value = "/wx/getCollect",method = RequestMethod.POST)
    public JSONObject getCollect(@RequestBody JSONObject param){
        String cWxOpenId = param.getString("cWxOpenId");
        String cSpid = param.getString("cSpid");
        QueryWrapper<TCollect> wrapper = new QueryWrapper<TCollect>();
        if(StringUtils.isNotBlank(cWxOpenId)){
            wrapper.lambda().eq(TCollect::getcWxOpenId,cWxOpenId);
        }
        if(StringUtils.isNotBlank(cSpid)){
            wrapper.lambda().eq(TCollect::getcSpid,cSpid);
        }
        List<TCollect> list = collectService.list(wrapper);
        return ResponseUtil.getSuccessResponseBody(list);
    }

    /**
     * 删除收藏
     * @param param
     * @return
     */
    @RequestMapping(value = "/wx/delCollect",method = RequestMethod.POST)
    public JSONObject delCollect(@RequestBody JSONObject param){
        String cId = param.getString("cId");
        String cWxOpenId = param.getString("cWxOpenId");
        String cSpid = param.getString("cSpid");
        try {
            if(StringUtils.isNotBlank(cId)){
                collectService.removeById(cId);
            }
            else if(StringUtils.isNotBlank(cWxOpenId) && StringUtils.isNotBlank(cSpid)){
                QueryWrapper<TCollect> wrapper = new QueryWrapper<TCollect>();
                wrapper.lambda().eq(TCollect::getcWxOpenId,cWxOpenId);
                wrapper.lambda().eq(TCollect::getcSpid,cSpid);
                collectService.remove(wrapper);
            }
            return ResponseUtil.getSuccessResponseBody(null);
        }catch (Exception e){
            return ResponseUtil.getErrorResponseBody(null,"取消收藏失败");
        }
    }
}
