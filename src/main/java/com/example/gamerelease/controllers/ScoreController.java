package com.example.gamerelease.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.gamerelease.domains.AddScore;
import com.example.gamerelease.domains.Score;
import com.example.gamerelease.mappers.ScoreMapper;

@Controller
public class ScoreController {

    private final ScoreMapper scoremapper;

    @Autowired
    public ScoreController(ScoreMapper scoremapper) {
        this.scoremapper = scoremapper;
    }

    @PostMapping(value = "/addrank", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Score addrank(@RequestBody AddScore addScore) {
        String name = addScore.getName();
        if(name == null) {
            name = "anonymous";
        }
        int score = addScore.getScore();
        String gameCode = addScore.getGamecode();
        Score s = new Score(name, score, gameCode);
        if(name != null) {
            scoremapper.add(s);
        }
        return s;
    }
    
    @GetMapping("/ranking/{gameCode}")
    public String ranking(@PathVariable String gameCode, Model model) {
        List<Score> ranking = scoremapper.ranking(gameCode);
        model.addAttribute("ranking", ranking);
        return "game_ranking";
    }
    
}
