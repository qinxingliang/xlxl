package project.controller;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import project.entity.TExamRecord;
import project.entity.TJifenRecord;
import project.service.TExamRecordService;
import project.util.UUIDUtil;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * 考试记录 前端控制器
 * </p>
 *
 * @author YJR
 * @since 2023-09-14
 */
@RestController
@RequestMapping("/api/exam/record/v1")
public class TExamRecordController {
    @Resource
    private TExamRecordService examRecordService;

    @Resource
    private TJifenRecordController jifenRecordController;

    @RequestMapping(value = "/wx/add",method = RequestMethod.POST)
    public boolean add(@RequestBody TExamRecord examRecord){
        if(StringUtils.isBlank(examRecord.getcId())){
            examRecord.setcId(UUIDUtil.getUUID());
            examRecord.setDtCreateTime(LocalDateTime.now());
        }
        if(examRecord.getnSocre() != null && examRecord.getnSocre() >= 100){
            // 更新积分
            TJifenRecord record = new TJifenRecord();
            // 补全参数
            record.setnJifen(100);
            record.setnType((byte)0);
            record.setcOpenId(examRecord.getcOpenId());
            record.setcBgName("考试送积分");
            record.setDtCreateTime(LocalDateTime.now());
            jifenRecordController.addorRemoveReacord(record);
        }
        return examRecordService.saveOrUpdate(examRecord);
    }

    @RequestMapping(value = "/wx/get",method = RequestMethod.POST)
    public List<TExamRecord> get(@RequestBody JSONObject param){
        String cOpenId = param.getString("cOpenId");
        String orderBy = param.getString("orderBy");
        QueryWrapper<TExamRecord> wrapper = new QueryWrapper<>();
        if(StringUtils.isNotBlank(cOpenId)){
            wrapper.lambda().eq(TExamRecord::getcOpenId,cOpenId);
        }
        if(StringUtils.isNotBlank(orderBy) && StringUtils.equals("score",orderBy)){
            wrapper.lambda().orderByDesc(TExamRecord::getnSocre);
        }
        else{
            wrapper.lambda().orderByDesc(TExamRecord::getDtCreateTime);
        }

        return examRecordService.list(wrapper);
    }
}
