import { ElLoading } from 'element-plus';

/**
 * 加载中
 * @param {*} target 标签
 * @param {*} message 提示内容
 * @returns 
 */
const loadingInstance = (target,message) => {
    if(target == null){
        return ElLoading.service({
            lock: true,
            text: message,
            background: 'rgba(0, 0, 0, 0.7)'
        });
    }
    return ElLoading.service({
        target: target,
        lock: true,
        text: message,
        background: 'rgba(0, 0, 0, 0.7)'
    });
}

export {
    loadingInstance
}