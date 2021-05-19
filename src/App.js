import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Cover from './components/Cover'
import About from './components/About'
import EmailForm from './components/EmailForm'
import Socials from './components/Socials'
import Songs from './components/Songs'
import Footer from './components/Footer'
import axios from 'axios';
import './App.css';

class App extends Component {

  state={
    fetchedSongs: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get('https://warp-kings-repository.herokuapp.com/songs');
    this.setState({ fetchedSongs: res.data , loading: false })
  }

  render() {
  return (
    <div>
      <Navbar />
      <Cover />
      <About />
      <EmailForm />
      <Socials />
      <Songs 
        songs={this.state.fetchedSongs}
        loading={this.state.loading}   
      />
      <Footer />
    </div>
  )}
}

export default App;