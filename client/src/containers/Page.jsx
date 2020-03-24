import React from "react"
import MenuBlock from "../elements/MenuBlock"

//Styles
var pageStyle = {
    height:"90vh",
    padding:"1vw",
    paddingTop:"5vw",
    backgroundColor:"white",
    display:"flex",
    flexWrap:"wrap",
    flexFlow:"row wrap",
    justifyContent:"space-around"
}

//Component
export default class Page extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={pageStyle}>
                <MenuBlock title="Advice" colors={["#00c4cc","#7c2ae8"]}/>
                <MenuBlock title="Prayer Board" colors={["#43cea2","#185a9d"]}/>
                <MenuBlock title="Online Churches" colors={["orange","yellow"]}/>
                <MenuBlock title="Donate" colors={["#56ab2f","#a8e063"]}/>

                  {/* <MenuBlock title="Advice" colors={["#cb356b","#bd3f32"]}/>
                <MenuBlock title="Prayer Board" colors={["#43cea2","#185a9d"]}/>
                <MenuBlock title="Online Churches" colors={["orange","yellow"]}/>
                <MenuBlock title="Donate" colors={["#56ab2f","#a8e063"]}/> */}
            </div>
        )
    }
}