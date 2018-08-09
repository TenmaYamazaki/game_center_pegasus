package com.example.gamerelease.domains;

public class tamesi {

    private int scoreId;
    private String gameCode;
    private int scoreScore;
    private String scoreType;
    private String scoreUserName;
    private Game game;
    public tamesi(int scoreId, String gameCode, int scoreScore, String scoreType, String scoreUserName, Game game) {
        super();
        this.scoreId = scoreId;
        this.gameCode = gameCode;
        this.scoreScore = scoreScore;
        this.scoreType = scoreType;
        this.scoreUserName = scoreUserName;
        this.game = game;
    }
    public int getScoreId() {
        return scoreId;
    }
    public void setScoreId(int scoreId) {
        this.scoreId = scoreId;
    }
    public String getGameCode() {
        return gameCode;
    }
    public void setGameCode(String gameCode) {
        this.gameCode = gameCode;
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
    public String getScoreUserName() {
        return scoreUserName;
    }
    public void setScoreUserName(String scoreUserName) {
        this.scoreUserName = scoreUserName;
    }
    public Game getGame() {
        return game;
    }
    public void setGame(Game game) {
        this.game = game;
    }
    
    
}
