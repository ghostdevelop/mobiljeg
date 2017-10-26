import React, { Component } from 'react';
import { connect } from "react-redux";

class Profil extends Component {

  render() {
    return (
      <div id="profil">

        <div className="section">
          <div className="section-content">
            <h1 className="block-title">Profilom</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac arcu quis ex condimentum pretium. Etiam facilisis id quam tincidunt finibus. Duis gravida maximus quam eu suscipit. Vivamus mauris dui, molestie et commodo eu, dapibus vitae urna. Morbi sed augue ut arcu dignissim cursus sed ac sapien. </p>
          </div>
        </div>

      </div>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(Profil);
