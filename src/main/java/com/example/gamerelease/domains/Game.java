package com.example.gamerelease.domains;

public class Game {

    private int gameId;
    private String gameName;
    private String gameCode;
    private String gamePhoto;
    private String gameDesc;
    
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
