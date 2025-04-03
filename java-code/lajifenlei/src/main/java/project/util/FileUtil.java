package project.util;

import com.qcloud.cos.COSClient;
import com.qcloud.cos.ClientConfig;
import com.qcloud.cos.auth.AnonymousCOSCredentials;
import com.qcloud.cos.auth.BasicCOSCredentials;
import com.qcloud.cos.auth.COSCredentials;
import com.qcloud.cos.http.HttpProtocol;
import com.qcloud.cos.model.ObjectMetadata;
import com.qcloud.cos.model.PutObjectRequest;
import com.qcloud.cos.model.UploadResult;
import com.qcloud.cos.region.Region;
import com.qcloud.cos.transfer.TransferManager;
import com.qcloud.cos.transfer.TransferManagerConfiguration;
import com.qcloud.cos.transfer.Upload;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.net.URL;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;


/**
 * @author : YJR
 * @className : FileUtil
 * @description : [描述说明该类的功能]
 * @createTime : 2023/6/24 19:14
 */
@Component
public class FileUtil {

    @Value("${cos.secret-id}")
    private String secretId;
    @Value("${cos.secret-key}")
    private String secretKey;
    @Value("${cos.region}")
    private String region;

    @Value("${cos.name}")
    private String name;

    /**
     * 获取上传实例
     *
     * @return
     */
    public TransferManager createTransferManager() {
        // 创建一个 COSClient 实例，这是访问 COS 服务的基础实例。
        // 详细代码参见本页: 简单操作 -> 创建 COSClient
        COSCredentials cred = new BasicCOSCredentials(secretId, secretKey);
        ClientConfig clientConfig = new ClientConfig(new Region(region));
        clientConfig.setHttpProtocol(HttpProtocol.https);
        COSClient cosClient = new COSClient(cred, clientConfig);
        // 自定义线程池大小，建议在客户端与 COS 网络充足（例如使用腾讯云的 CVM，同地域上传 COS）的情况下，设置成16或32即可，可较充分的利用网络资源
        // 对于使用公网传输且网络带宽质量不高的情况，建议减小该值，避免因网速过慢，造成请求超时。
//        ExecutorService threadPool = Executors.newFixedThreadPool(16);

        // 传入一个 threadpool, 若不传入线程池，默认 TransferManager 中会生成一个单线程的线程池。
        TransferManager transferManager = new TransferManager(cosClient);

        // 设置高级接口的配置项
        // 分块上传阈值和分块大小分别为 5MB 和 1MB
        TransferManagerConfiguration transferManagerConfiguration = new TransferManagerConfiguration();
        transferManagerConfiguration.setMultipartUploadThreshold(5 * 1024 * 1024);
        transferManagerConfiguration.setMinimumUploadPartSize(1 * 1024 * 1024);
        transferManager.setConfiguration(transferManagerConfiguration);
        return transferManager;
    }

    /**
     * 上传文件并且获得url
     *
     * @param inputStream 文件流
     * @param fileName    文件名称
     * @return
     */
    public String uploadFileAndGetUrl(InputStream inputStream, String fileName) throws InterruptedException {
        URL objectUrl = null;
        TransferManager transferManager = null;
        COSClient cosClient = null;
        try {
            transferManager = createTransferManager();
            ObjectMetadata objectMetadata = new ObjectMetadata();
            // 上传的流如果能够获取准确的流长度，则推荐一定填写 content-length
            // 如果确实没办法获取到，则下面这行可以省略，但同时高级接口也没办法使用分块上传了
//            objectMetadata.setContentLength(inputStream);
            PutObjectRequest putObjectRequest = new PutObjectRequest(name, fileName, inputStream, objectMetadata);

            Upload upload = transferManager.upload(putObjectRequest);
            UploadResult uploadResult = upload.waitForUploadResult();
            // 不需要验证身份信息
            COSCredentials cred = new AnonymousCOSCredentials();
            // ClientConfig 中包含了后续请求 COS 的客户端设置：
            ClientConfig clientConfig = new ClientConfig();
            // 设置 bucket 的地域
            // COS_REGION 请参照 https://cloud.tencent.com/document/product/436/6224
            clientConfig.setRegion(new Region(region));
            // 设置生成的 url 的请求协议, http 或者 https
            // 5.6.53 及更低的版本，建议设置使用 https 协议
            // 5.6.54 及更高版本，默认使用了 https
            clientConfig.setHttpProtocol(HttpProtocol.https);
            // 生成cos客户端
            cosClient = new COSClient(cred, clientConfig);
            objectUrl = cosClient.getObjectUrl(name, uploadResult.getKey());
        } catch (InterruptedException e) {
            throw e;
        }
        finally {
            if(transferManager != null){
                transferManager.shutdownNow(true);
            }
            if(cosClient != null){
                cosClient.shutdown();
            }
        }
        return objectUrl == null ? "" : objectUrl.toString();
    }
}
