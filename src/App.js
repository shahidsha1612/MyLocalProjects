import './App.css';
import Card from './card';
import AppBar from './NavBar';
import { ThemeProvider } from "./contexts/ThemeContext";
import { Component } from 'react';
import PageContent from "./PageContent";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Playlist from './Playlist';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <ThemeProvider>
              <PageContent >
                <AppBar />


                <Card />
              </PageContent>
            </ThemeProvider>

          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
