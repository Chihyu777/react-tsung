import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet"
import { Route, HashRouter } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap"
import routers from './modules/router.js';
// import "../../bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
class App extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>國考粽粽</title>
                </Helmet>
                <Container>                  
                    <Row>                       
                        <Col >
                        {routers.map((router, index) => (
                                <Route exact key={index} {...router.routeProps} />
                            ))}
                        </Col>
                    </Row>                    
                </Container>
            </>
        );
    }
}

ReactDOM.render(
    <HashRouter >
        <App />
    </HashRouter>,
    document.getElementById("root")
);