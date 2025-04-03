package project.controller;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import project.entity.TDianzan;
import project.service.TDianzanService;
import project.util.UUIDUtil;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author YJR
 * @since 2023-09-14
 */
@RestController
@RequestMapping("/api/dianzan/v1")
public class TDianzanController {
    @Resource
    private TDianzanService dianzanService;

    /**
     * 添加
     * @param dianzan
     * @return
     */
    @RequestMapping(value = "/wx/add", method = RequestMethod.POST)
    public boolean add(@RequestBody TDianzan dianzan) {
        if(StringUtils.isBlank(dianzan.getcId())){
            dianzan.setcId(UUIDUtil.getUUID());
            dianzan.setDtCreateTime(LocalDateTime.now());
        }
        return dianzanService.saveOrUpdate(dianzan);
    }
    /**
     * 查询发现内容
     */
    @RequestMapping(value = "/wx/my/select", method = RequestMethod.POST)
    public List<TDianzan> selectFx(@RequestBody JSONObject param) {
        QueryWrapper<TDianzan> wrapper = new QueryWrapper<>();
        wrapper.lambda().eq(TDianzan::getcOpenId,param.getString("cOpenId"));
        wrapper.lambda().orderByDesc(TDianzan::getDtCreateTime);
        return dianzanService.list(wrapper);
    }


    /**
     * 查询
     * @param param
     * @return
     */
    @RequestMapping(value = "/wx/select", method = RequestMethod.POST)
    public List<TDianzan> add(@RequestBody JSONObject param) {
        String faxianId = param.getString("faxianId");
        QueryWrapper<TDianzan> wrapper = new QueryWrapper<>();
        if(StringUtils.isNotBlank(faxianId)){
            wrapper.lambda().eq(TDianzan::getcFaxianId,faxianId);
        }
        wrapper.lambda().orderByDesc(TDianzan::getDtCreateTime);
        return dianzanService.list(wrapper);
    }

    /**
     * 查询
     * @param param
     * @return
     */
    @RequestMapping(value = "/wx/del", method = RequestMethod.POST)
    public boolean del(@RequestBody JSONObject param) {
        String faxianId = param.getString("faxianId");
        String openId = param.getString("openId");
        QueryWrapper<TDianzan> wrapper = new QueryWrapper<>();
        if(StringUtils.isNotBlank(faxianId) && StringUtils.isNotBlank(openId)){
            wrapper.lambda().eq(TDianzan::getcFaxianId,faxianId);
            wrapper.lambda().eq(TDianzan::getcOpenId,openId);
            return dianzanService.remove(wrapper);
        }
        return false;
    }
}
