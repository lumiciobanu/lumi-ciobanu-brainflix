import React from 'react';
import './components/MainLeft/MainLeft.scss';
import Header from './components/Header/Header';
import Upload from '././components/Upload/Upload';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/UploadPage" component={Upload} />
          <Route path='/:videoId' component={MainPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;



