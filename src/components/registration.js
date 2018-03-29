import React, { Component } from 'react';

export default class Registration extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('http://localhost:3001/auth', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return(
      <div className='form'>
       <form onSubmit={this.handleSubmit}>
         <label htmlFor='email'>Email</label>
         <input type='text' name='email'/>
         <button> submit </button>
       </form>
      </div>
    )
  }
}