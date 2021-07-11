import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import Home from "./views/pages/Home";
import Count from "./views/pages/Count";
import Todo from "./views/pages/Todo";
import Post from "./views/pages/Post";
import Header from "./views/components/Header";
import Photos from "./views/pages/Photos";

const App = () => {

    return (

        <Container>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/count'} component={Count}/>
                <Route path={'/photos'} component={Photos}/>
                <Route path={'/todo'} component={Todo}/>
                <Route path={'/posts'} component={Post}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;