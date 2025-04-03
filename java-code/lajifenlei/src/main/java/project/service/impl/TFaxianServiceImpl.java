package project.service.impl;

import project.entity.TFaxian;
import project.mapper.TFaxianMapper;
import project.service.TFaxianService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 * 发现表 服务实现类
 * </p>
 *
 * @author YJR
 * @since 2023-09-14
 */
@Service
public class TFaxianServiceImpl extends ServiceImpl<TFaxianMapper, TFaxian> implements TFaxianService {

    @Resource
    private TFaxianMapper faxianMapper;
    /**
     * 获取所有发现内容
     *
     * @return
     */
    @Override
    public List<TFaxian> getAll() {
        return faxianMapper.getAll();
    }
}
