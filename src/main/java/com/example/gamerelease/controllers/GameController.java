package com.example.gamerelease.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.gamerelease.domains.Game;
import com.example.gamerelease.mappers.GameMapper;

@Controller
public class GameController {

    private final GameMapper gameMapper;
    
    @Autowired
    public GameController(GameMapper gameMapper) {
        this.gameMapper = gameMapper;
    }
    
    @GetMapping("/")
    public String index(Model model) {
        List<Game> games = gameMapper.all();
        model.addAttribute("games", games);
        return "index";
    }
    
    @GetMapping("/pug/pray")
    public String pug() {
        return "pugratataki";
    }
}
