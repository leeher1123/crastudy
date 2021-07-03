import React, {useState} from "react";
import styled from "styled-components";
import PageTitle from "../components/Title/PageTitle";

const Count = () => {

    const [number, setNumber] = useState(1)

    const increaseNumber = () => {
        setNumber( number + 1 )
    }

    const decreaseNumber = () => {
        setNumber( number - 1 )
    }

    return (
        <Container>
            <PageTitle title={"page count"}/>
            <Number>{number}</Number>
            <Buttons>
                <Button onClick={increaseNumber}>+</Button>
                <Button onClick={decreaseNumber}>-</Button>
            </Buttons>
        </Container>
    )
}

const Container = styled.div`

`;

const Number = styled.div`
  font-size: 40px;
  text-align: center;
  margin: 30px 0;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  font-size: 24px;
  border: 1px solid #000;
  color: #111;
  margin: 0 10px;
  cursor: pointer;
  outline: none;
`;
export default Count;