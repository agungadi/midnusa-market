
import React, { Component } from "react";

import { logoutUser } from "./actions/auth";
import { connect } from "react-redux";

class logout extends Component {

    componentDidMount() { // komponen untuk mengecek ketika compnent telah di-mounting, maka panggil API

        const { dispatch } = this.props;
        dispatch(logoutUser());
    }
    render() {
        const { isLoggingOut, logoutError } = this.props;
        return(
            <div>

            {isLoggingOut && <p>Logging Out....</p>}
            {logoutError && <p>Error logging out</p>}
            </div>

        )

    }

    
}

function mapStateToProps(state) {
    return {
      isLoggingOut: state.auth.isLoggingOut,
      logoutError: state.auth.logoutError,
    };
  }
export default connect(mapStateToProps)(logout);
