package project.mapper;

import project.entity.TFaxian;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * <p>
 * 发现表 Mapper 接口
 * </p>
 *
 */
@Mapper
public interface TFaxianMapper extends BaseMapper<TFaxian> {
    /**
     * 获取所有发现内容
     * @return
     */
    public List<TFaxian> getAll();
}
