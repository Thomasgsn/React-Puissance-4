import React, {useState} from 'react';
import styled from 'styled-components';
import {Quatre_cinq, Six_sept} from "./tableau";

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
    opacity: 0.8;
    box-shadow: 0 2px 2px lightgray;
  }

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }
`;

const ButtonToggle = styled(Button)`
  transition: all 0.3s;
  opacity: 0.3;
  ${({active}) => active && `
    opacity: 1; 
  `}
`;


function DisplayP() {

    const typesTab = ["4 x 5", "6 x 7"];
    const typeOp = ["1 v 1", "1 v Bots"];

    const [activeTab, setActiveTab] = useState(typesTab[0]);
    const [activeOp, setActiveOp] = useState(typeOp[0]);

    const handleSetActiveTab = (type) => {
        setActiveTab(type);
    };

    const handleSetActiveOp = (type) => {
        setActiveOp(type);
    };

    function Tab() {
        if (activeTab === "4 x 5") {
            return (<Quatre_cinq></Quatre_cinq>);
        } else if (activeTab === "6 x 7") {
            return (<Six_sept></Six_sept>);
        }
    }

    return <>
        <div className="flex justify-center">
            <div className="border-black border p-4">
                <div className="inline w-full">
                    <div className="flex justify-center gap-4">
                        <div className="text-lg text-center">
                            Tableau de jeu :
                            <p className="text-xl font-semibold"> {activeTab} </p>
                        </div>
                        <div className="text-lg text-center">
                            Mode de jeu sélectionné :
                            <p className="text-xl font-semibold"> {activeOp} </p>
                        </div>
                    </div>
                    <div>
                        {typesTab.map((type) => <ButtonToggle active={activeTab === type}
                                                              onClick={() => handleSetActiveTab(type)}>
                            {type}
                        </ButtonToggle>)}
                    </div>
                    <div>
                        {typeOp.map((type) => <ButtonToggle active={activeOp === type}
                                                            onClick={() => handleSetActiveOp(type)}>
                            {type}
                        </ButtonToggle>)}
                    </div>
                </div>
            </div>
            <div className="border-black border p-4">
                <Tab></Tab>
            </div>
        </div>
        <div className="flex justify-center"></div>
    </>;
}

export default function Display() {
    return (
        <>
            <DisplayP/>
        </>
    );
}
