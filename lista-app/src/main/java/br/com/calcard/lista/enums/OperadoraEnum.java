package br.com.calcard.lista.enums;

public enum OperadoraEnum {
    TIM("TIM"),
    VIVO("VIVO"),
    OI("OI"),
    CLARO("CLARO");

    private String value;

    OperadoraEnum(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
