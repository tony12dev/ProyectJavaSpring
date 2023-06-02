package com.cursojava.curso.controllers;

import com.cursojava.curso.dao.UsuarioDao;
import com.cursojava.curso.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.cursojava.curso.models.Usuario;
@RestController
public class AutController {

    @Autowired
    private UsuarioDao usuarioDao;
    @Autowired
    private JWTUtil jwtutil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
      public String login(@RequestBody Usuario usuario){
         Usuario usuariologeo = usuarioDao.validarUsuario(usuario);

            if(usuariologeo != null){
                String tokenjwt  = jwtutil.create(String.valueOf(usuariologeo.getId()),usuariologeo.getEmail());
                return tokenjwt;
            }
            return "FAIL";
       }

    }

