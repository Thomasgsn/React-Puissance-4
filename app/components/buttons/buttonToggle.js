import styled from 'styled-components';
import Button from './Button';

const StyledButtonToggle = styled.button`
  background-color: #f57e7e;
  font-size: 20px;
  color: white;
  padding: 5px 15px;
  outline: 0;
  margin: 20px 10px 10px 0;
  cursor: pointer;
  transition: all .3s cubic-bezier(0, 0.59, 0.33, 0.87);
  border-radius: .5vw;
  opacity: 0.3;

  ${({active}) => active && `
    opacity: 1; 
  `}
  
  &:hover {
    -webkit-box-shadow: 5px 5px 15px 5px rgba(255, 255, 255, 01);
    box-shadow: 5px 5px 15px 5px rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
  }

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }

  &:disabled:hover {
    cursor: not-allowed;
    background-color: #be1717;
    opacity: 0.3;
  }
`;

const ButtonToggle = ({children, onClick, active}) => {
    return <StyledButtonToggle onClick={onClick} active={active}>{children}</StyledButtonToggle>;
};

export default ButtonToggle;
