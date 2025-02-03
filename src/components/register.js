import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser, registerUser } from "./Auth/actions/auth";
import { withStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import {Link} from 'react-router-dom';
import profile from "./images/avatar.png";
import { register } from "../serviceWorkerRegistration";

const styles = () => ({
  "@global": {
    body: {
      backgroundColor: "#fff",
    },
  },
  paper: {
    marginTop: 100,
    display: "flex",
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f50057",
  },
  form: {
    marginTop: 1,
  },
  errorText: {
    color: "#f50057",
    marginBottom: 5,
    textAlign: "center",
  },
});

class Register extends Component {
  state = { email: "", password: "" };
  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };
  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  };
  handleSubmit = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;
    dispatch(registerUser(email, password));
  };
  render() {
    const { classes, loginError, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/daftarmeja" />;
    } else {
      return (
      
        <form>
            <div className='main'>
                <div className='sub-main'>
                    <div>
                        <div className='imgs'>
                            <div className='container-image'>
                                <img src={profile} alt='profile' className='profile'/>
                            </div>
             

                        </div>
                        <div class="d-flex flex-row" className='imgs'> 
                            <label class="radio mr-1"> 
                                <input type="radio" name="add" value="anz"/>
                                <Link className='link' to='/login'>
                                <span> <i class="fa fa-user"></i> Login </span>
                                </Link> 
                            </label> 
                            <label class="radio"> 
                                <input type="radio" name="add" value="add" checked /> 
                                <span> <i class="fa fa-plus-circle"></i> Register </span> 
                            </label> 
                        </div>
                        <div>
                            <div className='first-input'>
                                <input type="email" placeholder="Enter New Email" className='fill' name="email" onChange={this.handleEmailChange} />
                            </div>
                            <div className='second-input'>
                                <input type="password" placeholder='Enter New Password' className='fill' name="password" onChange={this.handlePasswordChange}/>
                            </div>
                            {loginError && (
                              <Typography component="p" className={classes.errorText}>
                                Incorrect email or password.
                              </Typography>
                            )}
                            <div className='login-btn'>
                                    <button type="button" onClick={this.handleSubmit}><h4>Register</h4></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </form>

      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default withStyles(styles)(connect(mapStateToProps)(Register));