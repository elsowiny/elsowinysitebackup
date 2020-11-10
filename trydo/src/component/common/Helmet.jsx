import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Sherief Elsowiny Freelance developer and computer scientist </title>
                    <meta name="description" content="Sherief Elsowiny Freelance developer and computer scientist. Currently studying computer science at Columbus State University, in pursuance of a masters." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
