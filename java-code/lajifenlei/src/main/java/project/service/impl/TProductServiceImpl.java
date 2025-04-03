package project.service.impl;

import project.entity.TProduct;
import project.mapper.TProductMapper;
import project.service.TProductService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 垃圾类型管理 product 服务实现类
 * </p>
 *
 * @author YJR
 * @since 2023-09-15
 */
@Service
public class TProductServiceImpl extends ServiceImpl<TProductMapper, TProduct> implements TProductService {

}
