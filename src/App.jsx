import React from 'react';
import './reset.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuStatus: ''
    }
  }

  toggleMenu = () => {
    if (this.state.menuStatus === 'close' || !this.state.menuStatus) {
      this.setState({ menuStatus: 'open' })
    } else {
      this.setState({ menuStatus: 'close' });
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div className="navContainer">
            <div className="title">Start Bootstrap</div>
            <div className="navLinks">
              <h3>SERVICES</h3>
              <h3>PORTFOLIO</h3>
              <h3>ABOUT</h3>
              <h3>TEAM</h3>
              <h3>CONTACT</h3>
            </div>
            <div onClick={this.toggleMenu} className="menu">
              <img src="http://mail.3gbikes.com/warrantyclaim/files/stacks-image-6b135e7.png" alt="" />
            </div>
          </div>
        </nav>
        {this.state.menuStatus ?
          <div className={this.state.menuStatus + " dropdownMenu"}>
            <div className="dropdownLinks">
              <h3>SERVICES</h3>
              <h3>PORTFOLIO</h3>
              <h3>ABOUT</h3>
              <h3>TEAM</h3>
              <h3>CONTACT</h3>
            </div>
          </div>
          : null
        }
        <main>
          <div className="mainContainer">
            <h4>Welcome To Our Studio!</h4>
            <h1>IT'S NICE TO MEET YOU</h1>
            <button>TELL ME MORE</button>
          </div>
        </main>
      </div>
    );
  }
}
export default App;