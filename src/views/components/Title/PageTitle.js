import React from "react";
import styled from "styled-components";

const PageTitle = ({title}) => {
    return (
        <Container>
            <h1>{title}</h1>
        </Container>
    )
}

const Container = styled.div`
  font-size: 30px;
  margin: 100px 0;
  text-align: center;
  color: #111;
  text-transform: uppercase;
`;

export default PageTitle;