import React from "react";
import styled from 'styled-components/native';

const Container = styled.View`
    margin-top: -65px;
    width: 40px;
    height: 40px;
    position: relative;
`;

const ProfileImage = styled.Image`
    margin-left: -40px;
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
    bottom: -80px;
    right: -35px;
    width: 23px;
    height: 23px;
    border-radius: 15px;
    background: #10D24B;
    border: 2px solid #FFFFFF;
`;

const ProfileAvatar = () => {
    return(
        <Container>
            <ProfileImage source={require('../assets/vale.jpeg')} />
            <UserActive />
        </Container>
    )
}

export default ProfileAvatar;