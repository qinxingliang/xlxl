package project.service.impl;

import project.entity.TSinger;
import project.mapper.TSingerMapper;
import project.service.TSingerService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 歌手表 服务实现类
 * </p>
 *
 * @author YJR
 * @since 2023-08-31
 */
@Service
public class TSingerServiceImpl extends ServiceImpl<TSingerMapper, TSinger> implements TSingerService {

}
