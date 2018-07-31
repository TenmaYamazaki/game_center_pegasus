package com.example.gamerelease.domains;

public class Score {

    private int scoreId;
    private String gameCode;
    private int scoreScore;
    private String scoreType;
    private String scoreUserName;
    public String getScoreUserName() {
        return scoreUserName;
    }
    public void setScoreUserName(String scoreUserName) {
        this.scoreUserName = scoreUserName;
    }
    public Score(String name, int score, String gamecode) {
        this.scoreUserName = name;
        this.scoreScore = score;
        this.gameCode = gamecode;
    }
 
    public int getScoreId() {
        return scoreId;
    }
    public void setScoreId(int scoreId) {
        this.scoreId = scoreId;
    }
    public Score(int scoreId, int scoreScore, String scoreType, String scoreUserName, String gamecode) {
        super();
        this.scoreId = scoreId;
        this.gameCode = gamecode;
        this.scoreScore = scoreScore;
        this.scoreType = scoreType;
        this.scoreUserName = scoreUserName;
    }
    public String getgamecode() {
        return gameCode;
    }
    public void setgamecode(String gamecode) {
        this.gameCode = gamecode;
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
