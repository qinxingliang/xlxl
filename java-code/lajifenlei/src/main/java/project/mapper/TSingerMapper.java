package project.mapper;

import project.entity.TSinger;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 * 歌手表 Mapper 接口
 * </p>
 *
 * @author YJR
 * @since 2023-08-31
 */
@Mapper
public interface TSingerMapper extends BaseMapper<TSinger> {

}
