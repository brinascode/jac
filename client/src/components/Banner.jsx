import React, {useContext} from "react"
import AppContext from "../containers/AppContext"

var bannerStyle={
    backgroundImage:"url('/images/banner3.png')",
    backgroundSize:"100% 100%",
    backgroundPosition:"top",
    backgroundRepeat:"no-repeat",
    height:"40vw", //47 or 39
    backgroundColor:"black"
}

function Banner(){
    var imgStyle={
    position:"absolute",
    top:"46vw",
    left:"48%",
    color:"white",
    display:"inline"
}
    var context = useContext(AppContext)
    // context.mounted ? imgStyle.display ="inline" : imgStyle.display = "none"
        return(
             <div style={bannerStyle}>
                <img src="/images/icons/bouncing-arrow.gif" alt="banner" width="5%" style={imgStyle}/>
             </div>
        )
    
}
export default Banner;

