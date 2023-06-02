import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
import { AuthContextProvider } from "context/AuthContext";

ReactDOM.render(

  <AuthContextProvider>

    <HashRouter>

      <Switch>
        <Route path="/auth" component={AuthLayout} />
        <Route path="/admin" component={AdminLayout} />
        <Redirect from="/" to='/admin' />
      </Switch>

    </HashRouter>
    
  </AuthContextProvider>,
  document.getElementById("root")
);
