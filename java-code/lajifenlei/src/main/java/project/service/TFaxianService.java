package project.service;

import project.entity.TFaxian;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 发现表 服务类
 * </p>
 *
 */
public interface TFaxianService extends IService<TFaxian> {
    /**
     * 获取所有发现内容
     * @return
     */
    public List<TFaxian> getAll();
}
