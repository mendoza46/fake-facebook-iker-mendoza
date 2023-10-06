import React from "react";
import { Text } from "react-native";
import styled from 'styled-components/native';
import ProfileToolBar from "../components/ProfileToolBar";
import MainSeparator from "../components/MainSeparator";
import ProfilePhoto from "../components/ProfilePhoto";
import ProfileAvatar from "../components/ProfileAvatar";

const View = styled.View`
    align-items: center;
    height: 500px;`;

const Profile = () => {
    return(
        <View>
            <ProfileToolBar />
            <ProfilePhoto></ProfilePhoto>
            <ProfileAvatar />
        </View>
    )
}

export default Profile;