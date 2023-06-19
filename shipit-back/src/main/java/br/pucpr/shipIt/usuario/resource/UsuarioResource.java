package br.pucpr.shipIt.usuario.resource;


import br.pucpr.shipIt.pagamento.entity.Pagamento;
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

import java.util.Arrays;
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

    @PostMapping("/update")
    public ResponseEntity<Usuario> update(@RequestBody Usuario usuario) {
        var dto = usuarioService.update(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(dto);
    }

    @GetMapping("/listarAll")
    public List<Usuario> listar() {
        return usuarioService.listar();
    }

    @GetMapping("/getUsuarioByaccess/{id}")
    public List<Usuario> getUsuarioByaccess(@PathVariable("id") Long id) {
        Usuario user = listarById(id);
        if(user.isAdminUsuario()){
            return usuarioService.listar();
        } else {
            return Arrays.asList(user);
        }


    }

    @GetMapping("/listar/{id}")
    public Usuario listarById(@PathVariable("id") Long id) {
        return usuarioService.buscarPorId(id);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable("id") Long id) {
        usuarioService.excluir(id);
    }



}
