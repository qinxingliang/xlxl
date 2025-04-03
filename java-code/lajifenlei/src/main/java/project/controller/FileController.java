package project.controller;

import project.util.FileUtil;
import project.util.ResponseUtil;
import project.util.UUIDUtil;
import com.alibaba.fastjson2.JSONObject;
import com.qcloud.cos.model.UploadResult;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.InputStream;

/**
 * @author : YJR
 * @className : FileController
 * @description : [描述说明该类的功能]
 * @createTime : 2023/6/24 19:10
 */
@Slf4j
@Controller
@RequestMapping("/api/file")
public class FileController {
    @Resource
    private FileUtil fileUtil;

    @ResponseBody
    @RequestMapping(value = "/imgUpload", method = RequestMethod.POST)
    public JSONObject imgUpload(@RequestParam("file") MultipartFile file) {
        UploadResult uploadResult = null;
        // 获取文件输入流
        try ( InputStream inputStream  = file.getInputStream()){
            String url = fileUtil.uploadFileAndGetUrl(inputStream, UUIDUtil.getUUID() + file.getOriginalFilename());
            if(StringUtils.isNotBlank(url)){
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("url",url);
                return ResponseUtil.getSuccessResponseBody(jsonObject);
            }else{
                return ResponseUtil.getErrorResponseBody(null,"上传文件异常");
            }
        } catch (Exception e) {
            log.error("上传文件异常",e);
            return ResponseUtil.getErrorResponseBody(null,"上传文件异常");
        }
    }
}
