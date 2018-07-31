package com.example.gamerelease.domains;

public class AddScore {

    private String name;
    private int score;
    private String gamecode;

    public AddScore() {
        
    }
    
    public AddScore(String name, int score, String gamecode) {
        System.out.println("Game Code: " + gamecode);
        this.name = name;
        this.score = score;
        this.gamecode = gamecode;
    }
    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getScore() {
        return score;
    }
    public void setScore(int score) {
        this.score = score;
    }
    public String getGamecode() {
        return gamecode;
    }
    public void setGamecode(String gamecode) {
        this.gamecode = gamecode;
    }
    
    
}
