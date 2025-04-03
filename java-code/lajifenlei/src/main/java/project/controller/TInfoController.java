package project.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import project.entity.TInfo;
import project.service.TInfoService;
import project.util.UUIDUtil;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author YJR
 * @since 2023-09-13
 */
@RestController
@RequestMapping("/api/info/v1")
public class TInfoController {
    @Resource
    private TInfoService infoService;

    /**
     * 获取配置信息
     */
    @RequestMapping(value = "/wx/getInfo", method = RequestMethod.POST)
    public TInfo getInfo() {
        QueryWrapper<TInfo> wrapper = new QueryWrapper<>();
        List<TInfo> list = infoService.list(wrapper);
        return list.size() > 0 ? list.get(0) : new TInfo();
    }

    /**
     * 更新配置信息
     */
    @RequestMapping(value = "/updateInfo", method = RequestMethod.POST)
    public boolean updateInfo(@RequestBody TInfo info) {
        if(StringUtils.isBlank(info.getcId())){
            info.setcId(UUIDUtil.getUUID());
        }
        return infoService.saveOrUpdate(info);
    }
}
