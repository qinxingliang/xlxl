package project.service;

import project.entity.TLbt;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author YJR
 * @since 2023-06-27
 */
public interface TLbtService extends IService<TLbt> {

    int addOrUpdate(TLbt lbt);
}
