import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import authReducer from '../reducers';

let auth = '';
const GoogleAuth = ({ userStatus, signIn, signOut }) => {
    
    useEffect(()=> {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '984416052183-7elmjcdujd261tsnnk4cqirmm7bpnsv9.apps.googleusercontent.com',
                scope: 'email',
                plugin_name: 'streamer'
            }).then(() => {
                auth = window.gapi.auth2.getAuthInstance()
                onAuthChange(auth.isSignedIn.get())
                auth.isSignedIn.listen(onAuthChange);
            });
        });
    }, [])
    
    const onAuthChange = (userStatus) => {
        if (userStatus) {
            signIn(auth.currentUser.get().getId());
        } else {
            signOut();
        }
    }

    const renderAuthButton = () => {
        if (userStatus === null) {
            return null;
        } else if (userStatus) {
            return (
                <button onClick={onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                        Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={onSignInClick}className="ui red google button">
                    <i className="google icon" />
                        Signin
                </button>
            )
        }
    }


    const onSignInClick = () => {
        auth.signIn();
    }

    const onSignOutClick = () => {
        auth.signOut();
    }

    

    return (
        <div>{renderAuthButton()}</div>
    )
}

const mapStateToProps = state => {
    return {
        userStatus: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);