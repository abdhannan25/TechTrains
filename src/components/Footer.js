import React, { Component } from 'react'
import "./footer.css"

class Footer extends React.Component{

    render(){

        return(

            <div>
                 <div style={{backgroundColor:"#0d1f38", height:"60px" }}>
                        <p className="mt-3 pt-3 font-weight-light text-light footer-text">Copyrights 2021 All rights reserved ©</p>
                    </div>

            </div>

        )

    }

}

export default Footer;