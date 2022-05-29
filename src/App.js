import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import MainHeader from './components/MainHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import ProductsPage from './content/ProductsPage';
import JourneysPage from './content/JourneysPage';
import FeaturesPage from './content/FeaturesPage';

class App extends Component {
  render() {
    return (
      <>
        <MainHeader />
        <Content>
          <div className="HeaderMenuButton" />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/journeys" component={JourneysPage} />
            <Route path="/features" component={FeaturesPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
