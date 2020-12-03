import React from "react";
import {Redirect} from "react-router";

export const authWithRedirect = (Component) => {

    class RedirectComponent extends React.Component {

        render() {
            if (!this.props.isAuth) return <Redirect to={`/login`}/>

            return <Component {...this.props} />
        }
    }

    return RedirectComponent;
}

