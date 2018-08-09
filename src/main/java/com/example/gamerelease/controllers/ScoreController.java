package com.example.gamerelease.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
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
        if(name.equals("")) {
            int rand = (int)(Math.random() * 5);
            switch (rand) {
                case 0 : name = "香川照之.";
                         break;
                case 1 : name = "阿部寛.";
                         break;
                case 2 : name = "吉田鋼太郎.";
                         break;
                case 3 : name = "堤真一.";
                         break;
                default : name = "哀川翔.";
                         break;
            }
        }
        int score = addScore.getScore();
        String gameCode = addScore.getGamecode();
        Score s = new Score(name, score, gameCode);
            scoremapper.add(s);
        return s;
    }
    
//    @GetMapping("/ranking/{gameCode}")
//    public String ranking(@PathVariable String gameCode, Model model) {
//        List<Score> ranking = scoremapper.ranking(gameCode);
//        model.addAttribute("ranking", ranking);
//        return "game_ranking";
//    }
    
}
