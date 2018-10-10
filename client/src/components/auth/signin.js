import React, { PureComponent } from 'react';
import {reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';



class Signin extends PureComponent {
  handleFormSubmit({ mail, password }) {
    this.props.signinUser({ mail, password });
  }

  renderError() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <string>
            Oops!
            {' '}
            {this.props.errorMessage}
          </string>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
			<div className="col-sm-6 col-sm-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username"/>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password"/>
                        
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
    );
  }
}

const mapStateToProps = state => ({ errorMessage: state.auth.error });

export default reduxForm({
  form: 'signin',
})(connect(mapStateToProps, actions)(Signin));

