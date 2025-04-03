package project.controller;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import project.entity.TJifenRecord;
import project.entity.TQiandao;
import project.service.TJifenRecordService;
import project.service.TQiandaoService;
import project.util.UUIDUtil;

import javax.annotation.Resource;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

/**
 * <p>
 * 签到表 前端控制器
 * </p>
 *
 * @author YJR
 * @since 2023-09-13
 */
@RestController
@RequestMapping("/api/qiandao/v1")
public class TQiandaoController {
    @Resource
    private TQiandaoService qiandaoService;

    @Resource
    private TJifenRecordController jifenRecordController;
    /**
     * 添加签到记录
     * @param qiandao
     * @return
     */
    @RequestMapping(value = "/wx/addQiandao",method = RequestMethod.POST)
    public boolean addQiandao(@RequestBody TQiandao qiandao){
        if(StringUtils.isBlank(qiandao.getcId())){
            qiandao.setcId(UUIDUtil.getUUID());
            qiandao.setDtCreateTime(LocalDateTime.now());
        }
        // 构建分数记录参数
        TJifenRecord jifenRecord = new TJifenRecord();
        // 签到积分固定为10分
        jifenRecord.setnJifen(10);
        jifenRecord.setnType((byte)0);
        jifenRecord.setcOpenId(qiandao.getcOpenId());
        jifenRecord.setcBgName("签到送积分");
        jifenRecord.setDtCreateTime(LocalDateTime.now());
        // 更新积分记录表
        jifenRecordController.addorRemoveReacord(jifenRecord);
        // 更新签到记录表
        return qiandaoService.saveOrUpdate(qiandao);
    }

    /**
     * 查询签到记录
     * @param param
     * @return
     */
    @RequestMapping(value = "/wx/getQiandao",method = RequestMethod.POST)
    public List<TQiandao> getQiandao(@RequestBody JSONObject param){
        QueryWrapper<TQiandao> wrapper = new QueryWrapper<>();
        String cOpenId = param.getString("cOpenId");
        if(StringUtils.isNotBlank(cOpenId)){
            wrapper.lambda().eq(TQiandao::getcOpenId,cOpenId);
        }
        String isToday = param.getString("isToday");
        if(StringUtils.isNotBlank(isToday)){
            // 查询今天数据
            LocalDateTime start = LocalDateTime.of(LocalDate.now(), LocalTime.MIN);
            LocalDateTime end = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);
            wrapper.lambda().ge(TQiandao::getDtCreateTime,start);
            wrapper.lambda().le(TQiandao::getDtCreateTime,end);
        }
        wrapper.lambda().orderByDesc(TQiandao::getDtCreateTime);
        return qiandaoService.list(wrapper);
    }
}
