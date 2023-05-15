package br.pucpr.shipIt.usuario.responses;

import br.pucpr.shipIt.usuario.entity.Usuario;
import lombok.Data;
import lombok.NonNull;

@Data
public class LoginResponse {
    @NonNull
    private String token;
    @NonNull
    private Usuario usuario;
}
