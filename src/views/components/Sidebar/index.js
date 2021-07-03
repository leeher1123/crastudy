import React from "react";
import styled from "styled-components";

const Sidebar = ({open, onClose}) => {
    return (
        <>
            <Container className={open ? 'open' : ''}>
                Sidebar
            </Container>
            <Screen onClick={onClose}
                    className={open ? 'open' : ''}/>
        </>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  z-index: 1500;
  background: #fff;
  box-shadow: 1px 0 8px rgba(0, 0, 0, 0.15);
  transform: translateX(-105%);
  transition: .4s;
  &.open {
    transform: none;
  }
`;

const Screen = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1400;
  background: rgba(0, 0, 0, 0.6);
  display: none;
  &.open {
    display: block;
  }
`;

export default Sidebar;