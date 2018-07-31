package com.example.gamerelease.domains;

public class Score {

    private int scoreId;
    private int gameId;
    private int scoreScore;
    private String scoreType;
    private String scoreUserName;
    public String getScoreUserName() {
        return scoreUserName;
    }
    public void setScoreUserName(String scoreUserName) {
        this.scoreUserName = scoreUserName;
    }
    public Score(String name, int score) {
        this.scoreUserName = name;
        this.scoreScore = score;
    }
    public int getScoreId() {
        return scoreId;
    }
    public void setScoreId(int scoreId) {
        this.scoreId = scoreId;
    }
    public int getGameId() {
        return gameId;
    }
    public void setGameId(int gameId) {
        this.gameId = gameId;
    }
    public int getScoreScore() {
        return scoreScore;
    }
    public void setScoreScore(int scoreScore) {
        this.scoreScore = scoreScore;
    }
    public String getScoreType() {
        return scoreType;
    }
    public void setScoreType(String scoreType) {
        this.scoreType = scoreType;
    }
    
    
}
