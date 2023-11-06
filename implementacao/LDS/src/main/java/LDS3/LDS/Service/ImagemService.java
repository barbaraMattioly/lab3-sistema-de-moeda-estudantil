package LDS3.LDS.Service;

import com.microsoft.azure.storage.CloudStorageAccount;
import com.microsoft.azure.storage.blob.CloudBlobContainer;
import com.microsoft.azure.storage.blob.CloudBlockBlob;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.util.Base64;
import java.util.UUID;

@Service
public class ImagemService {

    @Value("${azure.storage.connection-string}")
    private String connectionString;

    @Value("${azure.storage.container-name}")
    private String containerName;

    public String uploadImages(String base64Image) throws Exception {
        try {
            CloudStorageAccount storageAccount = CloudStorageAccount.parse(connectionString);
            CloudBlobContainer container = storageAccount.createCloudBlobClient().getContainerReference(containerName);

            String fileName = UUID.randomUUID().toString() + ".jpg";
            byte[] imageBytes = Base64.getDecoder().decode(base64Image);

            CloudBlockBlob blob = container.getBlockBlobReference(fileName);
            blob.upload(new ByteArrayInputStream(imageBytes), imageBytes.length);

            return blob.getUri().toString();
        } catch (Exception e) {
            throw new Exception("Erro ao cadastrar imagem", e); //Ajustar exceção aq
        }
    }
}
