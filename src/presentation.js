// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Appear
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import DemoSlide from './components/DemoSlide';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#CCCCCC',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={1000}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            WebGL
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Web Graphic Language
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={3} lineHeight={1} textColor="tertiary">
            WebGL
          </Heading>
          <Text margin="10px 0 0" textColor="primary" size={4}  bold>
            <p style={{textAlign: 'justify'}}>WebGL programs consist of control code written in JavaScript and shader code (GLSL) that is executed on a computer's Graphics Processing Unit (GPU).</p>
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={2} lineHeight={2} textColor="tertiary">
            Usage
          </Heading>
          <Appear>
            <Text textColor="primary" margin="25px 0" size={5}>Control GPU</Text>
          </Appear>
          <Appear>
            <Text textColor="primary" margin="25px 0" size={5}>Render 3D models</Text>
          </Appear>
          <Appear>
            <Text textColor="primary" margin="25px 0" size={3} bold>Video Games!!</Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={2} lineHeight={2} textColor="tertiary">
            Why!?
          </Heading>
        </Slide>
        <CodeSlide
          theme={theme}
          transition={['fade']}
          lang="jsx"
          color="primary"
          textColor="primary"
          bgColor="secondary"
          // eslint-disable-next-line import/no-webpack-loader-syntax
          code={require("!raw-loader!./assets/code.example")}
          ranges={[
            { loc: [0, 1], title: "Code Example!" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2], title: "Random title" },
            { loc: [1, 2], title: "Heres a note!" },
            { loc: [2, 3], title: "Random title"},
            { loc: [4, 7], title: "Random title" /*image: shiaLabeoufMagicGif*/ },
            { loc: [8, 10], title: "Random title" },
            { loc: [12, 14], title: "Random title"}
        ]}/>
        <DemoSlide title={'Render'} src={'https://localhost:3001'}/>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="tertiary">
            Libraries
          </Heading>
          <List>
            <Appear><ListItem bold>three.js</ListItem></Appear>
            <Appear><ListItem>babylon.js</ListItem></Appear>
            <Appear><ListItem>PixiJS</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="tertiary" caps>
            VR
          </Heading>
          <List>
            <Appear><ListItem bold>React VR</ListItem></Appear>
            <Appear><ListItem>A-Frame</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={2} lineHeight={2} textColor="tertiary">
            Examples!
          </Heading>
        </Slide>
        <DemoSlide title={'Example 1: Cube Slam'} src={'https://www.cubeslam.com/qskokh'}/>
        <DemoSlide title={'Example 2: Track'} src={'https://demos.littleworkshop.fr/track'}/>
        <DemoSlide title={'Example 3: Car Visualizer'} src={'http://carvisualizer.plus360degrees.com/threejs/'}/>
        <DemoSlide title={'Example 4: Jenga'} src={'http://chandlerprall.github.io/Physijs/examples/jenga.html'}/>
      </Deck>
    );
  }
}
