package br.com.calcard.lista.resource;

import br.com.calcard.lista.enums.OperadoraEnum;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/operadoras")
@CrossOrigin("*")
public class OperadoraResource {

    @GetMapping
    public Object getAll(){
        return OperadoraEnum.values();
    }

}
