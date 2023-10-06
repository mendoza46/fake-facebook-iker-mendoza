import React from "react";
import { Text } from "react-native";
import styled from 'styled-components/native';
import ProfileToolBar from "../components/ProfileToolBar";

const View = styled.View`
    align-items: center;
    height: 500px;`;

const Profile = () => {
    return(
        <View>
            <ProfileToolBar />
        </View>
    )
}

export default Profile;