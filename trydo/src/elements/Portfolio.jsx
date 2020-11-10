import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";

import { GiPenguin} from 'react-icons/gi';



//we change the header profile by accessing the breadcrumb located here
import Breadcrumb from "../elements/common/BreadcrumbPortfolio";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

//        |\ |\
//        \ \| |
//         \ | |
//       .--''/
//     /o     \
//     \      / hey---- this is where you will add any items to display for your projects!!! just remember to increase the display down below!
//     {>o<}='
import  ElsowinyPortfolioListContent from "./ElsowinyPortfolio/ElsowinyPortfolio";

var list = ElsowinyPortfolioListContent.ElsowinyPortfolioListContent

class Portfolio extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='The Elsowiny Laboratory' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'The Elsowiny Laboratory'}   />
                {/* End Breadcrump Area */}

                {/* Start Portfolio Area */}
                <div className="portfolio-area pt--120 pb--140 bg_color--5">
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title service-style--3 text-center mb--15">
                                        <h2 className="title">Featured</h2>
                                        <p>Here are some of my projects.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {list.map((value , index) => (
                                                <div className="portfolio" key={index}>
                                                    <div className="thumbnail-inner">
                                                        <div className={`thumbnail ${value.image}`}></div>
                                                        <div className={`bg-blr-image ${value.image}`}></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                                            <div className="portfolio-button">
                                                                <a className="rn-btn" href={value.page}>See More! <GiPenguin /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30">
                                        <h2 className="title">All Works</h2>
                                        <p>All my relevant projects are here</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
{/*
//        |\ |\
//        \ \| |
//         \ | |
//       .--''/
//     /o     \
//     \      / hey---- this is where you will change the amount of items to display for your projects!!! just remember to add more up top!
//     {>o<}='
*/}
                                <PortfolioList styevariation="text-left mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="https://github.com/elsowiny" target="_blank"><span>View More On GitHub</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                <Footer /> 
            </React.Fragment>
        )
    }
}
export default Portfolio;