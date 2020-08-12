import React from 'react';
import './components/MainLeft/MainLeft.scss';
import Header from './components/Header/Header';
import Upload from '././components/Upload/Upload';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';



const API_URL = '7f04c159-f06c-415a-ab44-82b82e7c16f8';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <MainPage />  */}
        
        <Switch>
          <Route path="/UploadPage" exact component={Upload} />
          <Route path="/" exact component={MainPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
export { API_URL };

//all data should exist here and should it pass it down

