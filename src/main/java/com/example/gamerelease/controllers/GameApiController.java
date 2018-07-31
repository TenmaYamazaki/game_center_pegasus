package com.example.gamerelease.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.gamerelease.domains.AddScore;
import com.example.gamerelease.domains.Score;
import com.example.gamerelease.mappers.GameMapper;

@Controller
public class GameApiController {

    private final GameMapper gameMapper;

    @Autowired
    public GameApiController(GameMapper gameMapper) {
        this.gameMapper = gameMapper;
    }

    @PostMapping(value = "/addrank", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Score addrank(@RequestBody AddScore addScore) {
        String name = addScore.getName();
        int score = addScore.getScore();
        System.out.println(name+ "   :   " + score);
        Score s = new Score(name, score);
        return s;
    }
}
