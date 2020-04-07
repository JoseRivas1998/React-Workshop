import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Container>
            <Row>
              <Col>
                <h1>Hello World!</h1>
                <Switch>
                  <Route path={"/page1"} render={() => <h2>This is page 1!</h2>}/>
                  <Route path={"/page2"} render={() => <h2>This is page 2!</h2>}/>
                  <Route path={"/"} exact render={() => <h2>This is the home page!</h2>}/>
                </Switch>
                <Link to="/">Home</Link> | <Link to="/page1">Page 1</Link> | <Link to="/page2">Page 2</Link>
              </Col>
            </Row>
          </Container>
        </Layout>
      </div>
    );
  }
}

export default App;
