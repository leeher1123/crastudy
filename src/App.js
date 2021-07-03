import React from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import Home from "./views/pages/Home";
import Count from "./views/pages/Count";
import Todo from "./views/pages/Todo";
import Users from "./views/pages/Users";
import Header from "./views/components/Header";

const App = () => {
    return (
        <Container>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/count'} component={Count}/>
                <Route path={'/todo'} component={Todo}/>
                <Route path={'/users'} component={Users}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;