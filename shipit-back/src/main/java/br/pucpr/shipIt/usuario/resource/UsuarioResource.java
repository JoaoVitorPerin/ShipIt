package br.pucpr.shipIt.usuario.resource;


import br.pucpr.shipIt.usuario.entity.Usuario;
import br.pucpr.shipIt.usuario.requests.LoginRequest;
import br.pucpr.shipIt.usuario.requests.UsuarioRequest;
import br.pucpr.shipIt.usuario.responses.LoginResponse;
import br.pucpr.shipIt.usuario.service.UsuarioService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
@AllArgsConstructor
public class UsuarioResource {
    private UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest credenciais) {
        var login = usuarioService.login(credenciais);
        return login == null ?
                ResponseEntity.status(HttpStatus.UNAUTHORIZED).build() :
                ResponseEntity.ok(login);
    }

    @PostMapping("/salvar")
    public ResponseEntity<Usuario> salvar(@Valid @RequestBody UsuarioRequest usuario) {
        var dto = usuarioService.salvar(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(dto);
    }

    @GetMapping
    @RolesAllowed("USUARIO")
    public List<Usuario> listar() {
        return usuarioService.listar();
    }

}
