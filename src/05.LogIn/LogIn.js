import React, { Component } from 'react'; 


class LogIn extends Component {
  render() {
    return (
      <main>
        <section className="login-component">

          <div className="log-in-page">
            <h1>Ghost Towns</h1>
            <h2 className='log-in-header'>Log In</h2>
          </div>

          <div className="form-div">
            <form className='login-form'>
              <label className='login-label'>Email
              <input
                  className="login-input"
                  type="text"
                  name='loginUsername'
                  placeholder='user@email.com'
                  required
                />
              </label>

              <label className='login-label'>Password
              <input
                  className='login-input'
                  type='password'
                  name='loginPassword'
                  placeholder='Password1'
                  required
                />
              </label>

              <button className='login-button' type='submit'>
                Log In
              </button>

            </form>
          </div>

        </section>

      </main>


    );
  }

}

export default LogIn;