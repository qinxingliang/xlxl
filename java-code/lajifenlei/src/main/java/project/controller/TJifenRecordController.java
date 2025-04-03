package project.controller;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import project.entity.TJifenRecord;
import project.entity.TWxUser;
import project.service.TJifenRecordService;
import project.service.TWxUserService;
import project.util.UUIDUtil;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author YJR
 * @since 2023-09-13
 */
@RestController
@RequestMapping("/api/jifen/record/v1")
public class TJifenRecordController {
    @Resource
    private TJifenRecordService jifenRecordService;

    @Resource
    private TWxUserService wxUserService;
    /**
     * 添加或者减少积分记录
     * @param jifenRecord
     * @return
     */
    @RequestMapping(value = "/wx/addorRemoveReacord",method = RequestMethod.POST)
    public boolean addorRemoveReacord(@RequestBody TJifenRecord jifenRecord){
        if(StringUtils.isBlank(jifenRecord.getcId())){
            jifenRecord.setcId(UUIDUtil.getUUID());
            jifenRecord.setDtCreateTime(LocalDateTime.now());
        }
        // 更新用户积分
        UpdateWrapper<TWxUser> wrapper = new UpdateWrapper<>();
        wrapper.lambda().eq(TWxUser::getcOpenid,jifenRecord.getcOpenId());
        if(jifenRecord.getnType() == (byte)0){
            // 增加
            wrapper.setSql(" c_score = c_score + " + jifenRecord.getnJifen());
        }else{
            // 减少
            wrapper.setSql(" c_score = c_score - " + jifenRecord.getnJifen());
        }
        wxUserService.update(wrapper);
        return jifenRecordService.saveOrUpdate(jifenRecord);
    }

    /**
     * 查询积分记录
     * @param param
     * @return
     */
    @RequestMapping(value = "/wx/getReacord",method = RequestMethod.POST)
    public List<TJifenRecord> getReacord(@RequestBody JSONObject param){
        QueryWrapper<TJifenRecord> wrapper = new QueryWrapper<>();
        String cOpenId = param.getString("cOpenId");
        Integer nType = param.getInteger("nType");
        if(StringUtils.isNotBlank(cOpenId)){
            wrapper.lambda().eq(TJifenRecord::getcOpenId,cOpenId);
        }
        if(nType != null){
            wrapper.lambda().eq(TJifenRecord::getnType,nType);
        }
        wrapper.lambda().orderByDesc(TJifenRecord::getDtCreateTime);
        return jifenRecordService.list(wrapper);
    }
}
