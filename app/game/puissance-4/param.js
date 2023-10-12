'use client';
import React, {useState} from "react";
import styled from "styled-components";
import {
    validateGoogleFontFunctionCall
} from "next/dist/compiled/@next/font/dist/google/validate-google-font-function-call";

const Button = styled.button`
  background-color: green;
  font-size: 20px;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  margin: 20px 10px 10px 0;
  cursor: pointer;

  &:hover {
    opacity: .8;
    box-shadow: 0 2px 2px lightgray;
  }

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }
`;

const ButtonToggle = styled(Button)`
  transition: all .3s;
  opacity: 0.3;
  ${({active}) =>
          active &&
          `
    opacity: 1; 
  `}
`;

const typesTab = ["4 x 5", "6 x 7"];
function ParamTab() {
    const [active, setActive] = useState(typesTab[0]);
    allActive.push(active)
    return (
        <>

            <div>
                {typesTab.map((type) => (
                    <ButtonToggle active={active === type} onClick={() => setActive(type)}>
                        {type}
                    </ButtonToggle>
                ))}
            </div>

            <div className="text-lg"> Votre tableau de jeu sera de : <p className="text-xl font-semibold"> {active} </p>
            </div>

        </>
    );
}

const typeOp = ["1 v 1", "1 v Bots"];

function ParamOp() {
    const [active, setActive] = useState(typeOp[0]);

    return (
        <>
            <div>
                {typeOp.map((type) => (
                    <ButtonToggle active={active === type} onClick={() => setActive(type)}>
                        {type}
                    </ButtonToggle>
                ))}
            </div>
            <div className="text-lg"> Votre tableau de jeu sera de : <p className="text-xl font-semibold"> {active} </p>
            </div>
        </>
    );
}



const allActive = [];
function GetAllActive(){
    return allActive;
}

console.log(GetAllActive())




export default function Param() {
    return (
        <>

            <ParamTab/>
            <ParamOp/>
        </>
    );
}