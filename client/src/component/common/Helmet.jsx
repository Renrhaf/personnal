import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} | Quentin Fahrner, développeur web freelance</title>
                    <meta name="description" content={this.props.pageDescr} />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
