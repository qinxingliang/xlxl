package project.service.impl;

import project.entity.TVideo;
import project.mapper.TVideoMapper;
import project.service.TVideoService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 视频表 服务实现类
 * </p>
 *
 */
@Service
public class TVideoServiceImpl extends ServiceImpl<TVideoMapper, TVideo> implements TVideoService {

}
