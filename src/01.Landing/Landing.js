import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default class Landing extends Component {

  render() {

    return (

      <main>
        <div className='landing-page'>
          <header>words</header>

          <section className='landing-overlay'>
          <div className='landing-page-header'>
            <h1 className='landing-h1'>Ghost Towns </h1>
          </div>

          <div className='landing-page-content'>
            <p> Abandoned Boom Towns of the Old West</p>
            <Link to='/home'><button>Enter</button> </Link>
          </div>
          </section>
        </div>
      </main>
    );
  }
}

