import React from 'react';

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Layout
} from 'spectacle';

export default class DemoSlide extends React.Component {

    render () {
        const { title, src } = this.props;
        return (
            <Slide bgColor="secondary" textColor="primary">
                <Heading size={6} textColor="tertiary">
                    {title}
                </Heading>
                <Layout><iframe title={title} width="1280" height="720" src={src}></iframe></Layout>
            </Slide>
        );
    }
}