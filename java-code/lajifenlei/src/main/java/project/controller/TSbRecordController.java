package project.controller;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.entity.TSbRecord;
import project.service.TSbRecordService;
import project.util.UUIDUtil;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * 识别记录 前端控制器
 * </p>
 *
 * @author YJR
 * @since 2024-03-09
 */
@RestController
@RequestMapping("api/sb/record/v1")
public class TSbRecordController {
    @Resource
    private TSbRecordService sbRecordService;
    @RequestMapping("wx/add")
    public boolean save(@RequestBody TSbRecord sbRecord){
        sbRecord.setDtCreateTime(LocalDateTime.now());
        sbRecord.setcId(UUIDUtil.getUUID());
        return sbRecordService.save(sbRecord);
    }

    @RequestMapping("wx/getAll")
    public List<TSbRecord> save(@RequestBody JSONObject param){
        QueryWrapper<TSbRecord> wrapper = new QueryWrapper<>();
        String openid = param.getString("openid");
        if(StringUtils.isNotBlank(openid)){
            wrapper.lambda().eq(TSbRecord::getcOpenId,openid);
        }
        wrapper.lambda().orderByDesc(TSbRecord::getDtCreateTime);
        return sbRecordService.list(wrapper);
    }
}
