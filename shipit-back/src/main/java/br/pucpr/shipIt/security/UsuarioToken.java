package br.pucpr.shipIt.security;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioToken {
    private Long id;
    private String login;
    private String nome;
    private Set<String> roles = new HashSet<>();
}
