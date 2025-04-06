package project.service.impl;

import project.entity.TLbt;
import project.mapper.TLbtMapper;
import project.service.TLbtService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * <p>
 *  服务实现类
 * </p>
 */
@Service
public class TLbtServiceImpl extends ServiceImpl<TLbtMapper, TLbt> implements TLbtService {
    @Resource
    private TLbtMapper mapper;
    /**
     * @param spfl
     * @return
     */
    @Override
    public int addOrUpdate(TLbt lbt) {
        return mapper.addOrUpdate(lbt);
    }
}
