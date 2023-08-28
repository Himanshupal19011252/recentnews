import './App.css';
import React, { Component } from 'react'
import Nav from './components/Nav';
import Fetchnews from './components/Fetchnews';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TopLoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;
  apiKeyy = process.env.REACT_APP_NEWS_API_KEYY;

  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <div style={{height: "40px"}}><Nav/></div>
        <TopLoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
            <Route exact path="/" element={<Fetchnews setProgress={this.setProgress} apiKeyy={this.apiKeyy} key="general-home" pageSize={this.pageSize} country="in" category="general"/>}/>
            <Route exact path="/business"element={<Fetchnews setProgress={this.setProgress} apiKeyy={this.apiKeyy} key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
            <Route exact path="/entertainment"element={<Fetchnews setProgress={this.setProgress} apiKeyy={this.apiKeyy} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
            <Route exact path="/general"element={<Fetchnews setProgress={this.setProgress} apiKeyy={this.apiKeyy} key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
            <Route exact path="/health"element={<Fetchnews setProgress={this.setProgress} apiKeyy={this.apiKeyy} key="health" pageSize={this.pageSize} country="in" category="health"/>}/>
            <Route exact path="/science"element={<Fetchnews setProgress={this.setProgress} apiKeyy={this.apiKeyy} key="science" pageSize={this.pageSize} country="in" category="science"/>}/>
            <Route exact path="/sports"element={<Fetchnews setProgress={this.setProgress} apiKeyy={this.apiKeyy} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}/>
            <Route exact path="/technology"element={<Fetchnews setProgress={this.setProgress} apiKeyy={this.apiKeyy} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
