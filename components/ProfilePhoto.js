import React from "react";
import { ScrollView, View  } from "react-native";
import styled from 'styled-components/native';
import Avatar from "./Avatar";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import fakeUsers from '../data/fakeUsers.js'
import { Image } from "react-native";

const Photo = styled.Image`
    margin-top: -38px;
    width: 100%;
    height: 200px;
`   

const ProfilePhoto = () => {
    return(
        <Photo source={require('../assets/fondo.jpg')} />
    )
}

export default ProfilePhoto;