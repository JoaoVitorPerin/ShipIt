package br.pucpr.shipIt.usuario.service;


import br.pucpr.shipIt.security.JWT;
import br.pucpr.shipIt.usuario.entity.Usuario;
import br.pucpr.shipIt.usuario.repository.UsuarioRepository;
import br.pucpr.shipIt.usuario.requests.LoginRequest;
import br.pucpr.shipIt.usuario.requests.UsuarioRequest;
import br.pucpr.shipIt.usuario.responses.LoginResponse;
import jakarta.annotation.security.RolesAllowed;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UsuarioService {
    private UsuarioRepository usuarioRepository;
    private JWT jwt;

    public LoginResponse login(LoginRequest credenciais) {
        var usuario = usuarioRepository.findByLogin(credenciais.getLogin());
        if (usuario == null) return null;
        if (!usuario.getSenhaUsuario().equals(credenciais.getSenha())) return null;

        var token = jwt.createToken(usuario);
        return new LoginResponse(token, usuario);
    }

    public Usuario salvar(UsuarioRequest request) {
        var usuario = new Usuario();
        usuario.setEmailUsuario(request.getLogin());
        usuario.setSenhaUsuario(request.getSenha());
        usuario.setNomeUsuario(request.getNome());
        usuario.getRoles().add("USUARIO");
        return usuarioRepository.save(usuario);
    }

    @RolesAllowed("USUARIO")
    public List<Usuario> listar() {
        return usuarioRepository.findAll();
    }

    public Usuario buscarPorId(Long id) {
        return usuarioRepository.findById(id).get();
    }

    public void excluir(Long id) {
        usuarioRepository.deleteById(id);
    }
}
