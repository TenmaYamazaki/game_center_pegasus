package com.example.gamerelease.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.gamerelease.domains.Score;

@Mapper
public interface ScoreMapper {
    void add(Score score);
    List<Score> ranking(String gameCode);
}
