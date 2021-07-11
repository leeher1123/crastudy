import React from "react";
import styled from "styled-components";

const PhotoItem = ({item}) => {
    return (
        <Container>
            <img src={item.urls.regular} alt=""/>
        </Container>
    )
}

const Container = styled.div`
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export default PhotoItem;