import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router';

import Layout from './hoc/Layout/Layout';
import SignUp from './containers/SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Container>
            <Row>
              <Switch>
                <Route path={"/signup"} component={SignUp} />
              </Switch>
            </Row>
          </Container>
        </Layout>
      </div>
    );
  }
}

export default App;
