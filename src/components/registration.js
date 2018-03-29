import React, { Component } from 'react';
import '../assets/registrations.css';

export default class Registration extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('http://localhost:3000/auth', {
      method: 'POST',
      body: data,
    }).then((response) => {
      if ( response.ok) {
        alert('Registration Succesfull');
      }
    });
  }

  render() {
    return(
      <div className='form col-md-4'>
       <form onSubmit={this.handleSubmit}>

        <div className="form-group">
         <label htmlFor='email'>Email</label>
         <input type='text' name='email' className="form-control" />
        </div>

        <div className="form-group">
         <label htmlFor='Password'>Password</label>
         <input type='text' name='password' className="form-control" />
        </div>

        <div className="form-group">
         <label htmlFor='Password Confirmation'>Password confirmation</label>
         <input type='text' name='password_confirmation' className="form-control" />
        </div>
        <div className="form-group">
         <label htmlFor='name'>Name</label>
         <input type='text' name='name' className="form-control" />
        </div>

        <button> submit </button>
       </form>
      </div>
    )
  }
}
