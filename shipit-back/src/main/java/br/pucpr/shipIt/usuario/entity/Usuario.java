package br.pucpr.shipIt.usuario.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "usuario")
@Data
@NoArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Long idUsuario;

    @NotNull(message = "O nome é uma informação obrigatória")
    @Column(name = "nome_usuario", nullable = false, length = 255)
    private String nomeUsuario;

    @NotNull(message = "O e-mail é uma informação obrigatória")
    @Column(name = "email_usuario", nullable = false, length = 255, unique = true)
    private String emailUsuario;

    @NotNull(message = "A senha é uma informação obrigatória")
    @Column(name = "senha_usuario", nullable = false, length = 255)
    private String senhaUsuario;

    @Column(name = "admin_usuario")
    private boolean adminUsuario;

    @Transient
    @ToString.Exclude
    private Set<String> roles = new HashSet<>();

    @Transient
    private String admin;

    public Long getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNomeUsuario() {
        return nomeUsuario;
    }

    public void setNomeUsuario(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    public String getEmailUsuario() {
        return emailUsuario;
    }

    public void setEmailUsuario(String emailUsuario) {
        this.emailUsuario = emailUsuario;
    }

    public String getSenhaUsuario() {
        return senhaUsuario;
    }

    public void setSenhaUsuario(String senhaUsuario) {
        this.senhaUsuario = senhaUsuario;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }

    public boolean isAdminUsuario() {
        return adminUsuario;
    }

    public void setAdminUsuario(boolean adminUsuario) {
        this.adminUsuario = adminUsuario;
    }

    public String getAdmin() {
        if(isAdminUsuario()){
            return "admin";
        }
        return admin;
    }

    public void setAdmin(String admin) {
        this.admin = admin;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Usuario)) return false;
        Usuario usuario = (Usuario) o;
        return getIdUsuario().equals(usuario.getIdUsuario());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdUsuario());
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "idUsuario=" + idUsuario +
                ", nomeUsuario='" + nomeUsuario + '\'' +
                ", emailUsuario='" + emailUsuario + '\'' +
                ", senhaUsuario='" + senhaUsuario + '\'' +
                ", adminUsuario=" + adminUsuario +
                ", admin='" + admin + '\'' +
                '}';
    }
}
