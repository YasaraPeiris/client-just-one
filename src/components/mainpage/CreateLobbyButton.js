import styled from "styled-components";
import {Button} from "../../views/design/Button";
import Orange from "../../views/design/font-families/Orange";
import React from "react";

import { api, handleError } from '../../helpers/api';


const FlexButton = styled(Button)`
  display: flex;
  justify-content: center;
  margin: 10px;
  background: #FFFFFF;
`;


function CreateLobbyButton() {
    return (
        <FlexButton
            onClick={() => {
                // create lobby
            }}>
                <Orange>Create Lobby</Orange>
        </FlexButton>
    );
}

export default CreateLobbyButton;