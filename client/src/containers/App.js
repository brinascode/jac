import React from 'react';
import AppContext from "./AppContext";

import Header from "../components/Header.jsx"
import Banner from "../components/Banner.jsx"
import Page from "./Page"
import Footer from "../components/Footer"

var appStyle={
    overflowX:"hide"
}

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mounted:false
        }
    }

    componentDidMount(){
        var component = this
        this.setState({mounted:true})
        setTimeout(()=>{
            component.setState({yeah:"yeaaah"})
        },5000)
    }

    render(){
        return (
            <AppContext.Provider value={this.state}>
                <div className="App" style={appStyle}>
                    <Header/>
                    <Banner />
                    <Page />
                    <Footer />
                </div>
            </AppContext.Provider>
        );
    }
  
}


