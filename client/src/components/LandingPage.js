import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class LandingPage extends Component {
    changeToSignUp = e => {
        e.preventDefault();
        this.props.history.push(`/register`);
    }
    changeToSignIn = e => {
        e.preventDefault();
        this.props.history.push(`/login`);
    }
    
    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <h1 className="display-4">NTU courses online discussion room</h1>
                    <p className="lead">courses discuss platform only for NTU students</p>
                    <hr className="my-4"></hr>
                        <p>please use your NTU mail to sign up!</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.changeToSignUp}>Sign up now!</a>
                            <span></span>
                            <a href="#" className="btn btn-link" role="button" onClick={this.changeToSignIn}>Sign in</a>
                        </p>
                </div>


            </div>
                )
            }
        } 
        
export default withRouter(LandingPage)