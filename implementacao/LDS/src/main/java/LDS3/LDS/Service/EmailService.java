package LDS3.LDS.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import LDS3.LDS.Model.EmailModel;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String origem;

    public String enviarEmail(EmailModel email){
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

        simpleMailMessage.setFrom(origem);
        simpleMailMessage.setTo(email.getDestino());
        simpleMailMessage.setText(email.getMensagem());
        simpleMailMessage.setSubject(email.getAssunto());

        javaMailSender.send(simpleMailMessage);

        return "E-mail enviado com sucesso";
    }
}
