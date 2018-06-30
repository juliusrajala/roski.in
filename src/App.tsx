import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router, { Route } from 'src/core/Router';
import Header from 'src/ui/components/Header';
import Footer from 'src/ui/components/Footer';
import Drawer from 'src/ui/components/Drawer';
import ConfigProvider, { ConfigContext } from 'src/core/ConfigProvider';
import MapView from 'src/ui/views/MapView';
import About from 'src/ui/views/AboutView';
import Create from 'src/ui/views/CreateView';

const ReactApp = () => {
  return ReactDOM.render(
    <App />,
    document.getElementById('react-root')
  );
}

const App: React.SFC = () => (
  <ConfigProvider>
    <Router>
      <Header />
      <Drawer />
      <Route path="/" component={MapView} />
      <Route path="/new" component={Create} />
      <Route path="/about" component={About} />
    </Router>
    <Footer />
  </ConfigProvider>
);

ReactApp();