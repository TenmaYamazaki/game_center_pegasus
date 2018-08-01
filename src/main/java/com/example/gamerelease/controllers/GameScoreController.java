package com.example.gamerelease.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.gamerelease.domains.Game;
import com.example.gamerelease.mappers.GameScoreMapper;

@Controller
public class GameScoreController {
    
    private final GameScoreMapper gameScoreMapper;
    
    @Autowired
    public GameScoreController(GameScoreMapper gameScoreMapper) {
        this.gameScoreMapper = gameScoreMapper;
    }
    
    @GetMapping("ranking/{gameCode}")
    public String ranking(@PathVariable String gameCode, Model model) {
        List<Game> ranking = gameScoreMapper.ranking(gameCode);
        System.out.println("aaa" + ranking.size());
        model.addAttribute("ranking", ranking);
        return "game_ranking";
    }
}
