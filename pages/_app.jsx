import App, { Container } from 'next/app';
import Head from 'next/head';
import Favicon from 'react-favicon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>John Glendening</title>
          <meta property="og:title" content="John Glendening Portfolio" />
          <meta property="og:description" content="I am from Hays, Kansas. I attended the University of Kansas for my undergraduate degree. I obtained my MBA in 2011 from the University of Kansas. In that time, I began to study financial modeling and analytics. This is where my love of technology and software began to grow. After I departed from the University of Kansas, I moved to Washington D.C., to begin my career. I started as a lowly audit liaison at the Pentagon, but quickly advanced to building my own little analytics empire. This was very enjoyable, and I found the work very satisfying, as well.
I moved back to Hays, Kansas in March of 2016. I made the move for a number of reasons. Most important being that I had a son baking in his mother's stomach and I planned on being present for everything. Currently, I am working for an oil services company called Hess Services. In my spare time I enjoy spending time with my family and friends, gofing, skiing, doing crossword puzzles, and traveling." />
          <meta name="description" content="I am from Hays, Kansas. I attended the University of Kansas for my undergraduate degree. I obtained my MBA in 2011 from the University of Kansas. In that time, I began to study financial modeling and analytics. This is where my love of technology and software began to grow. After I departed from the University of Kansas, I moved to Washington D.C., to begin my career. I started as a lowly audit liaison at the Pentagon, but quickly advanced to building my own little analytics empire. This was very enjoyable, and I found the work very satisfying, as well.
I moved back to Hays, Kansas in March of 2016. I made the move for a number of reasons. Most important being that I had a son baking in his mother's stomach and I planned on being present for everything. Currently, I am working for an oil services company called Hess Services. In my spare time I enjoy spending time with my family and friends, gofing, skiing, doing crossword puzzles, and traveling." />
          <meta property="og:image" content="https://raw.githubusercontent.com/JohnGlendening/react-P/tree/main/static/pics/0.jpg" />
          <link href="https://fonts.googleapis.com/css?family=EB+Garamond|Quicksand" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
            crossOrigin="anonymous"
          />
          <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossOrigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
            integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
            crossOrigin="anonymous"
          />
        </Head>
        <Favicon url="../static/pics/letterD.ico" />
        <div className="container mainContainer">
          <Component {...pageProps} />
        </div>
      </Container>
    );
  }
}

export default MainApp;
