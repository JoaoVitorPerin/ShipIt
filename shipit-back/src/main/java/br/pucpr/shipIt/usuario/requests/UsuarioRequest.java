package br.pucpr.shipIt.usuario.requests;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UsuarioRequest {
    @NotBlank
    private String login;
    @Size(min = 8, max = 50, message = "Senha menor que {min} ou maior que {max} caracteres!")
    private String senha;
    @NotBlank
    private String nome;
}
