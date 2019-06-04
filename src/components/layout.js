import React from "react"
import Header from "./header";
import Footer from "./footer";
import layoutStyles from "./layout.module.scss";


const Layout = (props) => {
  return <div className={layoutStyles.container}>
    <div className={layoutStyles.header}>
      <Header></Header>
    </div>
    <div className={layoutStyles.main}>
      {props.children}
    </div>
    <div className={layoutStyles.footer}>
      <Footer></Footer>
    </div>
  </div>
}

export default Layout;