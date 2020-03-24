import React from "react"
var pageStyle = {
    height:"90vh",
}

export default class Page extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={pageStyle}>
                Page content
            </div>
        )
    }
}