import React, { Component } from 'react';
import './App.scss';
import About from '../components/about/About.jsx';
import Heading from '../components/heading/Heading.jsx';
import Projects from '../components/projects/Projects.jsx';
import AnimatedCursor from "react-animated-cursor";
import Indicator from '../components/indicator/Indicator';


class App extends Component {
  render() {
    return (
      <div className={"container"}>
        <Heading />
        <AnimatedCursor innerSize={10}
          outerSize={20}
          color='100, 100, 100'
          outerAlpha={0.2}
          innerScale={1}
          outerScale={3} />
        <About />
        <Projects />
        <Indicator />
      </div>
    );
  }
}

export default App;