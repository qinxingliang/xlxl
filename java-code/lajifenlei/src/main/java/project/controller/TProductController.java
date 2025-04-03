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
import project.entity.TProduct;
import project.service.TProductService;
import project.util.ResponseUtil;
import project.util.UUIDUtil;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 * 垃圾类型管理 product 前端控制器
 * </p>
 *
 * @author YJR
 * @since 2023-09-15
 */
@RestController
@RequestMapping("/api/product/v1")
@Slf4j
public class TProductController {
    @Resource
    private TProductService productService;

    /**
     * 获取物品类型
     * @return
     */
    @RequestMapping(value = "wx/getAll", method = RequestMethod.POST)
    public JSONObject getAll(@RequestBody JSONObject param) {
        Integer nSortId = param.getInteger("nSortId");
        String cName = param.getString("cName");
        QueryWrapper<TProduct> wrapper = new QueryWrapper<>();

        if (nSortId != null) {
            wrapper.lambda().eq(TProduct::getnSortId, nSortId);
        }
        if (StringUtils.isNotBlank(cName)) {
            wrapper.lambda().like(TProduct::getcName, cName);
        }
        wrapper.lambda().orderByDesc(TProduct::getDtCreateTime);
        List<TProduct> list = productService.list(wrapper);
        return ResponseUtil.getSuccessResponseBody(list);
    }

    /**
     * 添加或者更新物品分类
     *
     * @param exam
     * @return
     */
    @RequestMapping(value = "/addOrUpdate", method = RequestMethod.POST)
    public JSONObject addOrUpdate(@RequestBody TProduct exam) {
        try {
            if (StringUtils.isBlank(exam.getcId())) {
                exam.setcId(UUIDUtil.getUUID());
                exam.setDtCreateTime(LocalDateTime.now());
            }
            productService.saveOrUpdate(exam);
            return ResponseUtil.getSuccessResponseBody(null);
        } catch (Exception e) {
            log.error("addOrUpdate出现异常", e);
            return ResponseUtil.getErrorResponseBody(null, "服务出现异常");
        }
    }

    /**
     * 添加或者更新物品分类
     *
     * @param exam
     * @return
     */
    @RequestMapping(value = "wx/addOrUpdate", method = RequestMethod.POST)
    public boolean wxAddOrUpdate(@RequestBody TProduct exam) {
        if (StringUtils.isBlank(exam.getcId())) {
            exam.setcId(UUIDUtil.getUUID());
            exam.setDtCreateTime(LocalDateTime.now());
        }
        return productService.saveOrUpdate(exam);
    }


    /**
     * 分页查询数据
     */
    @RequestMapping(value = "/select", method = RequestMethod.POST)
    public JSONObject selectSpfl(@RequestBody JSONObject param) {
        // 获取页数
        Integer current = param.getInteger("current");
        // 获取考试题目
        String kstm = param.getString("kstm");
        Page<TProduct> page = new Page<TProduct>();
        page.setSize(10);
        if (current != null) {
            page.setCurrent(current);
        } else {
            page.setCurrent(1);
        }

        QueryWrapper<TProduct> wrapper = new QueryWrapper<>();
        if (StringUtils.isNotBlank(kstm)) {
            wrapper.lambda().like(TProduct::getcName, kstm);
        }
        wrapper.lambda().orderByDesc(TProduct::getDtCreateTime);
        // 获取查询返回结果
        Page<TProduct> pageSelect = productService.page(page, wrapper);
        JSONObject object = new JSONObject();
        object.put("list", pageSelect.getRecords());
        object.put("total", pageSelect.getTotal());
        return ResponseUtil.getSuccessResponseBody(object);
    }

    @RequestMapping(value = "/del", method = RequestMethod.POST)
    public boolean del(@RequestBody TProduct exam) {
        return productService.removeById(exam);
    }
}
