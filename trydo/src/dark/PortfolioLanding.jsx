import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
//import ServiceList from "../elements/service/ServiceList";
import ServiceTwo from "../elements/service/ServiceTwo";
//import ServiceOne from "../elements/service/ServiceOne";
//import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import Particles from 'react-particles-js';
import BlogContent from "../elements/blog/BlogContent";







const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Welcome to my World',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]


const PortfolioLanding = () => {
    let title = 'About Me',
        description = 'Freelance developer and computer scientist. Currently studying computer science at Columbus State University, in pursuance of a masters. This site will contain some of my many projects, to be updated periodically. More projects are contained on my github, with the code accompanying it.';
    const PostList = BlogContent.slice(0 , 3);
    return (
        <div className="active-dark">
            <Helmet pageTitle="Sherief Elsowiny" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
             

            {/* Start Slider Area   */}
            <div id="home" className="fix ">
                <div className="slider-activation slider-creative-agency with-particles">

                    <div className="frame-layout__particles"> 
                                <Particles
                                    params={{
                                        "particles": {
                                            "number": {
                                                "value": 50
                                            },
                                            "size": {
                                                "value": 4
                                            }
                                        },
                                        "interactivity": {
                                            "events": {
                                                "onhover": {
                                                    "enable": true,
                                                    "mode": "repulse"
                                                }
                                            }
                                        }
                                    }}
                                />
                    </div>      
                    
                    <div className="slider-wrapper">

                    
                        {/* Start Single Slide */}
                        {SlideList.map((value , index) => (
                            <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className={`inner ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                <h1 className="title">Hi, I’m Sherief Elsowiny <br/>
                                                <TextLoop>
                                                    
                                                    <span> Software Developer</span>
                                                    <span> Computer Scientist.</span>
                                                    <span> Web/Mobile Developer.</span>
                                                    
                                                </TextLoop>{" "}
                                                </h1>
                                                <h2>Based in NJ.</h2>
                                                {value.description ? <p className="description">{value.description}</p> : ''}
                                                {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}


                                
                         
                        {/* End Single Slide */}
                    </div>

                    
                </div>
            </div>
            {/* End Slider Area   */} 



















            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            


                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/elsowiny.jpg" alt="Sherief Elsowiny"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <a href="/about"><h2 className="title">{title}</h2></a>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End About Area */}


            {/* Start Service Area  */}
                <div id="service" className="service-area ptb--80  bg_image bg_image--3">
                   <div className="container">
                        <ServiceTwo />
                   </div>
                </div>
            {/* End Service Area  */}

            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                        <h2 className="title">Elsowiny Laboratory</h2>
                                        <p>A collection of some of the projects I have worked on.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="/portfolio"><span>View More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}

            {/* Start Blog Area */}
            <div id="lectures" className="fix">
                <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-center">
                                    <h2>Lectures</h2>
                                    <p>Here are a collection of some of my thoughts, <br />as well as some lessons for references.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60 mt_sm--40">
                            {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="blog blog-style--1">
                                        <div className="thumbnail">
                                            <a href="/blog-details">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href={value.page}>Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </div>    
                </div>
            </div>
            {/* End Blog Area */}

            {/* Start COntact Area */}
            <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <ContactThree contactImages="/assets/images/about/aboutel.png" contactTitle="Hire Me." />
                </div>
            </div>
            {/* End COntact Area */}

            <FooterTwo />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
        </div>
    )
}

export default PortfolioLanding;
