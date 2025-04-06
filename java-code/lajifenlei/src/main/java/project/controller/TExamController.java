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
import project.entity.TExam;
import project.service.TExamService;
import project.util.ResponseUtil;
import project.util.UUIDUtil;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * 考试表 前端控制器
 * </p>
 *

 */
@RestController
@Slf4j
@RequestMapping("/api/exam/v1")
public class TExamController {
    @Resource
    private TExamService examService;
    
    /**
     * 获取考试内容
     * @return
     */
    @RequestMapping(value = "wx/getAll",method = RequestMethod.POST)
    public JSONObject getAll(){
        QueryWrapper<TExam> wrapper = new QueryWrapper<>();
        wrapper.lambda().last(" ORDER BY RAND() LIMIT 10 ");
        List<TExam> list = examService.list(wrapper);

        return ResponseUtil.getSuccessResponseBody(list);
    }

    /**
     * 添加或者更新考试内容
     * @param exam
     * @return
     */
    @RequestMapping(value="/addOrUpdate",method = RequestMethod.POST)
    public JSONObject addOrUpdate(@RequestBody TExam exam) {
        try {
            if (StringUtils.isBlank(exam.getcId())) {
                exam.setcId(UUIDUtil.getUUID());
                exam.setDtCreateTime(LocalDateTime.now());
            }
            examService.saveOrUpdate(exam);
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
        // 获取考试题目
        String kstm = param.getString("kstm");
        Page<TExam> page = new Page<TExam>();
        page.setSize(10);
        if(current != null){
            page.setCurrent(current);
        }else{
            page.setCurrent(1);
        }

        QueryWrapper<TExam> wrapper = new QueryWrapper<>();
        if(StringUtils.isNotBlank(kstm)){
            wrapper.lambda().like(TExam::getcWtnr,kstm);
        }
        // 获取查询返回结果
        Page<TExam> pageSelect = examService.page(page, wrapper);
        JSONObject object = new JSONObject();
        object.put("list",pageSelect.getRecords());
        object.put("total",pageSelect.getTotal());
        return ResponseUtil.getSuccessResponseBody(object);
    }

    @RequestMapping(value = "/del",method = RequestMethod.POST)
    public boolean del(@RequestBody TExam exam){
        return examService.removeById(exam);
    }
}
