package com.example.gamerelease.domains;

import java.util.ArrayList;
import java.util.List;

public class Game {

    private int gameId;
    private String gameName;
    private String gameCode;
    private String gamePhoto;
    private String gameDesc;
    private List<Score> scores = new ArrayList<Score>();
    
    public List<Score> getScores() {
        return scores;
    }
    public void setScores(List<Score> scores) {
        this.scores = scores;
    }
    public String getGameDesc() {
        return gameDesc;
    }
    public void setGameDesc(String gameDesc) {
        this.gameDesc = gameDesc;
    }
    public String getGamePhoto() {
        return gamePhoto;
    }
    public void setGamePhoto(String gamePhoto) {
        this.gamePhoto = gamePhoto;
    }
    public int getGameId() {
        return gameId;
    }
    public void setGameId(int gameId) {
        this.gameId = gameId;
    }
    public String getGameName() {
        return gameName;
    }
    public void setGameName(String gameName) {
        this.gameName = gameName;
    }
    public String getGameCode() {
        return gameCode;
    }
    public void setGameCode(String gameCode) {
        this.gameCode = gameCode;
    }
    
    
}
