import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/BreadcrumbService";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import ElsowinyServiceList from "../elements/ElsowinyServices/ElsowinyServices";

var ServiceList = ElsowinyServiceList.ElsowinyServiceList;


class Service extends Component{
    render(){
        return(


          //  <div className="active-dark">   


            <React.Fragment>
                <PageHelmet pageTitle='Services' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Services'}   />
                {/* End Breadcrump Area */}



                <div class="active-dark">

                {/* Start Service Area bg_color--1 */}
                
                <div className="service-area creative-service-wrapper pt--90 pb--120 elsowinyservices">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>My Services</h2>
                                    <p>Here are the services I offer, <br /> take look and see.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            {ServiceList.map( (val , i) => (

                                //col-lg-12 col-12 mt_md--50
                                <div className="col-lg-6 col-12" key={i}>
                               {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>     */}
                                    <a className="text-center" href={val.page}>
                                        <div className="service service__style--2 elsowinyservicebox">
                                            <div className="icon iconelsowiny">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                
                <Footer />
                </div>

            </React.Fragment>

             
        )
       }
}
export default Service;