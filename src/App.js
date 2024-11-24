import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>My Portfolio</h1>
        </header>
        <section>
          <h2>Resume</h2>
          <p>Details about my resume...</p>
        </section>
        <section>
          <h2>Projects</h2>
          <p>Details about my projects...</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Details about how to contact me...</p>
        </section>
      </div>
    );
  }
}

export default App;
