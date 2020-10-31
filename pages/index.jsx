import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Picture from '../components/picture';
import Footer from '../components/footer';
import '../static/css/pages.css';

const Home = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From Front to Back." subtitle="A list of full stack, front end, and back end projects I worked on" />
    <h3>Applications</h3>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <Picture source="../static/pics/Agreed.JPG" alt="Agreed" deployed="https://johnglendening.github.io/Agreed/" />
      </div>
      <div className="col-md-6">
        <Picture source="../static/pics/Emotive.JPG" alt="Emotive" deployed="https://petersvirtualservices.github.io/EmotiveProject/" />
      </div>
      <div className="col-md-6">
        <Picture source="../static/pics/EMSystem.JPG" alt="EMSystem" deployed="https://johnglendening.github.io/Employee-Tracker/" />
      </div>
      <div className="col-md-6">
        <Picture source="../static/pics/noteTaker.JPG" alt="Note Taker" deployed="https://note-taker-01.herokuapp.com/" />
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
