package br.com.calcard.lista.entity;

import br.com.calcard.lista.enums.OperadoraEnum;

import javax.persistence.*;


@Entity
public class Contato {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "contato_seq_gen")
    @SequenceGenerator(name = "contato_seq_gen", sequenceName = "contato_seq", schema = "public")
    private Long id;

    @Column
    private String telefone;

    @Column
    private String nome;

    @Column(name="modelo_celular")
    private String modeloCelular;

    @Column
    @Enumerated(EnumType.STRING)
    private OperadoraEnum operadora;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getNome() {
        return nome;
    }

    public String getModeloCelular() {
        return modeloCelular;
    }

    public void setModeloCelular(String modeloCelular) {
        this.modeloCelular = modeloCelular;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public OperadoraEnum getOperadora() {
        return operadora;
    }

    public void setOperadora(OperadoraEnum operadora) {
        this.operadora = operadora;
    }
}
