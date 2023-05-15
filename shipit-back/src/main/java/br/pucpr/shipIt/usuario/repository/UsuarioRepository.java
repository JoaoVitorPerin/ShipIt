package br.pucpr.shipIt.usuario.repository;

import br.pucpr.shipIt.usuario.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    @Query("select user from Usuario user where user.emailUsuario = ?1")
    public Usuario findByLogin(String email);

}
