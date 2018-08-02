package com.example.gamerelease.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.gamerelease.domains.Game;


@Mapper
public interface GameScoreMapper {
    Game ranking(String gameCode);
}
