package br.com.calcard.lista.resource;

import br.com.calcard.lista.entity.Contato;
import br.com.calcard.lista.service.ContatoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/contatos")
@CrossOrigin("*")
public class ContatoResource {

    @Autowired
    public ContatoService contatoService;

    @GetMapping
    public ResponseEntity<List<Contato>> getContatos(){
        List<Contato> contatos = contatoService.buscarTodos();
        return ResponseEntity.ok(contatos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contato> BuscarPorId(@PathVariable("id") Long id){
        Contato contato = contatoService.getContatoById(id);
        return ResponseEntity.ok(contato);
    }

    @PutMapping
    public ResponseEntity<Contato> updateContato(@RequestBody Contato contato){
        Contato contatoAlterado = contatoService.alterar(contato);
        return ResponseEntity.ok(contatoAlterado);
    }

    @PostMapping
    public ResponseEntity<Contato> saveContato(@RequestBody Contato contato){
        Contato contatoCadastrado = contatoService.cadastrar(contato);
        return ResponseEntity.ok(contatoCadastrado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity excluirContato(@PathVariable("id") Long id){
        Contato contatoEncontrado = contatoService.getContatoById(id);
        if (Objects.isNull(contatoEncontrado)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        contatoService.delete(contatoEncontrado);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
