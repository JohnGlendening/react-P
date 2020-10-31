import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Card from '../components/card';
import Footer from '../components/footer';
import '../static/css/pages.css';

const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From You." subtitle="Contact me" />
    <hr />
    <div className="row">
      <div className="col contactCol">
        <Card source="../static/pics/gmail.png" text="jglendening11@gmail.com" />
        <Card source="../static/pics/github.png" text={<a href="https://github.com/JohnGlendening" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">GitHub</button></a>} />
        <Card source="../static/pics/linkedin.png" text={<a href="https://www.linkedin.com/in/john-glendening-pmp-cfe-ab03315/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">LinkedIn</button></a>} />
        <Card
          source="../static/pics/resume.png"
          text={
            <React.Fragment>
              <a href="https://github.com/JohnGlendening/Responsive-Portfolio/blob/main/Glendening%20John-RES.docx.docx%5B196%5D.pdf" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">Resume</button></a>
              <a href="https://github.com/JohnGlendening/Responsive-Portfolio/blob/main/Glendening%20John-RES.docx.docx%5B196%5D.pdf" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark"><FontAwesomeIcon icon={faDownload} /></button></a>
            </React.Fragment>
          }
        />
        <Card source="../static/pics/phone.png" text="785.218.4536" />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
