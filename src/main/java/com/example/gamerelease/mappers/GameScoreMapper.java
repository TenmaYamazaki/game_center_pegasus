package com.example.gamerelease.mappers;


import org.apache.ibatis.annotations.Mapper;

import com.example.gamerelease.domains.Game;


@Mapper
public interface GameScoreMapper {
    Game ranking(String gameCode);
}
