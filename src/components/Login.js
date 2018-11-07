import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
    return(
        <nav className="login">
            <h2>Inventory Login</h2>
            <p>Sign in to manage your stores inventory.</p>
            {/* Github Login */}
            <button
                className="github"
                onClick={() => props.authenticate('Github')}
            >
                Login with Github
            </button>

            {/* Twitter Login */}
            <button
                className="twitter"
                onClick={() => props.authenticate('Twitter')}
            >
                Login with Twitter
            </button>

            {/* Facebook Login */}
            <button
                className="facebook"
                onClick={() => props.authenticate('Facebook')}
            >
                Login with Facebook
            </button>
        </nav>
    );
};

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default Login;