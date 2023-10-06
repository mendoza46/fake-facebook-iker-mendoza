import React from "react";
import styled from 'styled-components/native';
import { Text } from "react-native";

const Container = styled.View`
    margin-top: -65px;
    width: 100%;
    height: 170px;
    position: relative;
    align-items: center;
`;

const ProfileImage = styled.Image`
    margin-left: px;
    width: 125px;
    height: 125px;
    border-radius: 200px;
    border-color: #1777f2;
    border-width: 3px; 
    border-color: #FFFFFF;
    border-width: 3px; 
`;

const UserActive = styled.View`
    position: absolute;
    bottom: 50px;
    right: 145px;
    width: 23px;
    height: 23px;
    border-radius: 15px;
    background: #10D24B;
    border: 2px solid #FFFFFF;
`;


const User = styled.Text`
    margin-top: 5px;
    margin-left: 5px;
    font-size: 20px;
    font-weight: bold;
    color: #222121;
`;

const ProfileAvatar = () => {
    return(
        <Container>
            <ProfileImage source={require('../assets/vale.jpeg')} />
            <UserActive />
            <User>Valentino Rossi</User>
        </Container>
    )
}

export default ProfileAvatar;