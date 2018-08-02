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
    
    public Game(int gameId, String gameName, String gameCode, String gamePhoto, String gameDesc) {
        this.gameId = gameId;
        this.gameName = gameName;
        this.gameCode = gameCode;
        this.gamePhoto = gamePhoto;
        this.gameDesc = gameDesc;
    }
    
    public Game(int gameId, String gameName, String gameCode, String gamePhoto, String gameDesc, int scoreId, 
                String gameCode2, int scoreScore, String scoreType, String scoreUserName) {
        this.gameId = gameId;
        this.gameName = gameName;
        this.gameCode = gameCode;
        this.gamePhoto = gamePhoto;
        this.gameDesc = gameDesc;
    }
    
    public List<Score> getScore() {
        return scores;
    }
    public void setScore(List<Score> scores) {
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
