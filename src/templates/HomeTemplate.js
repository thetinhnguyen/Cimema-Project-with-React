import React, { Fragment, Component } from "react";
import Headers from "../module/header/index";
import Footer from "../module/footer";
import { Route } from "react-router-dom";


class HomeLayout extends Component {
componentWillMount(){
    window.scrollTo(0,0)
}

  render() {
    return (
      <Fragment>
        <Headers   />
        {this.props.children}
      
        <Footer />
      </Fragment>
    );
  }
}


export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsRoute => (
        <HomeLayout>
          <Component {...propsRoute} />
        </HomeLayout>
      )}
    />
  );
}
