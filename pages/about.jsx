import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Footer from '../components/footer';
import IconImage from '../components/iconImage';
import '../static/css/pages.css';

const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From Beer to Code." subtitle="The story of my transition from Ballast Point Brewing Company to software development" />
    <h3>My Story</h3>
    <hr />
    <div className="row">
      <div className="col-md-6 aboutSections">
        <img className="profilePic profilePic1" src="../static/pics/DSC_6082.jpg" alt="profilepic" />
      </div>
      <div className="col-md-6 aboutSections">
        <h4 className="bio bio1">
        I am from Hays, Kansas. I attended the University of Kansas for my undergraduate degree. I obtained my MBA in 2011 from the University of Kansas. In that time, I began to study financial modeling and analytics. This is where my love of technology and software began to grow. After I departed from the University of Kansas, I moved to Washington D.C., to begin my career. I started as a lowly audit liaison at the Pentagon, but quickly advanced to building my own little analytics empire. This was very enjoyable, and I found the work very satisfying, as well.
I moved back to Hays, Kansas in March of 2016. I made the move for a number of reasons. Most important being that I had a son baking in his mother's stomach and I planned on being present for everything. Currently, I am working for an oil services company called Hess Services. In my spare time I enjoy spending time with my family and friends, gofing, skiing, doing crossword puzzles, and traveling.
        </h4>
      </div>
    </div>
    <h3 className="skills">My Skills</h3>
    <hr />
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm-6">
            <IconImage source="../static/pics/html.png" alt="html" />
            <IconImage source="../static/pics/bootstrap.png" alt="bootstrap" />
            <IconImage source="../static/pics/css.png" alt="css" />
          </div>
          <div className="col-sm-6">
            <IconImage source="../static/pics/githubIcon.png" alt="github" />
            <IconImage source="../static/pics/handlebars.png" alt="handlebars" />
            <IconImage source="../static/pics/javascript.png" alt="javascript" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm-6">
            <IconImage source="../static/pics/jquery.png" alt="jquery" />
            <IconImage source="../static/pics/mern.jpg" alt="mern" />
            <IconImage source="../static/pics/mongodb.png" alt="mongodb" />
          </div>
          <div className="col-sm-6">
            <IconImage source="../static/pics/mysql.png" alt="mysql" />
            <IconImage source="../static/pics/nodejs.png" alt="node" />
            <IconImage source="../static/pics/React.png" alt="react" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
