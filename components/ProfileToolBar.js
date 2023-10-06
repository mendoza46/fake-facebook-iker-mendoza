import React from "react";
import styled from 'styled-components/native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Avatar from "./Avatar";

const Container = styled.View`
    width: 100%;
    height: 92px;`

const Row = styled.View`
    flex-direction: row;
    background: #FFFFFF;
    width: 100%;
    padding: 0 11px;
    align-items: center;
    background-color: #3a86e9`

    //
const Input = styled.TextInput`
    height: 40px;
    width: 80%;
    padding: 0 8px;
    margin: 8px;
    border-radius: 30px;
    background-color: #3b5998;
    `

const Separator = styled.View`
    width: 1px;
    height: 26px;
    background: #F0F0F0;`


const ProfileToolBar = () => {
    return(
        <Container>
            <Row>
                <MaterialCommunityIcons name="chevron-left" size={30} color="black" />
                <Input placeholder="Iker Mendoza" ><MaterialCommunityIcons name="magnify" size={20} color='black' /></Input>
                <MaterialCommunityIcons name="account-box-multiple" size={26} color="black" />
            </Row>
            
        </Container>
    )
}

export default ProfileToolBar;