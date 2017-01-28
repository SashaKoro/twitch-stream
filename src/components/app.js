import React, { Component, } from 'react';
import StreamList from './StreamList';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <StreamList />
        <Footer />
      </div>
    );
  }
}
