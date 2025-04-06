package project.mapper;

import project.entity.TLbt;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 */
@Mapper
public interface TLbtMapper extends BaseMapper<TLbt> {
    int addOrUpdate(TLbt lbt);
}
