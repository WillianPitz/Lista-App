package br.com.calcard.lista.service;

import br.com.calcard.lista.entity.Contato;
import br.com.calcard.lista.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContatoService {

    @Autowired
    private ContatoRepository contatoRepository;


    public Contato cadastrar (Contato contato) {
        return contatoRepository.save(contato);
    }

    public List<Contato> buscarTodos() {
        return contatoRepository.findAll();
    }

    public void delete (Contato contato) {
        contatoRepository.delete(contato);
    }

    public Contato getContatoById(Long id) {
        return contatoRepository.findById(id).orElse(null);
    }

    public Contato alterar (Contato contato) {
        return contatoRepository.save(contato);
    }
}
