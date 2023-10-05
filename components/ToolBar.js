import React from "react";
import styled from 'styled-components/native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Avatar from "./Avatar";

const Container = styled.View`
    width: 100%;
    height: 92px;`

const Row = styled.View`
    flex-direction: row;
    background: blue;
    width: 100%;
    padding: 0 11px;
    align-items: center;`

const Input = styled.TextInput`
    height: 40px;
    width: 85%;
    padding: 0 8px;
    border: 1px solid #DDD;
    margin: 10px;
    border-radius: 30px;`

const Divider = styled.View`
    width: 100%;
    height: 0.5px;
    background: #DDDDDD;`

const Menu = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 42px;`

const MenuText = styled.Text`
    padding-left: 11px;
    font-weight: 500;
    font-size: 12px;`

const Separator = styled.View`
    width: 1px;
    height: 26px;
    background: #F0F0F0;`