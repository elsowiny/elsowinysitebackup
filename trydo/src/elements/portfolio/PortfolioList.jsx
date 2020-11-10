import React, { Component } from "react";
import {GiMicroscope} from "react-icons/gi";

//portfolio aka my laboratory 
import ElsowinyPortfolioListContent from "../ElsowinyPortfolio/ElsowinyPortfolio";

var mylist = ElsowinyPortfolioListContent.ElsowinyPortfolioListContent


class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = mylist.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href="/portfolio-details">{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={value.page}>View Details <GiMicroscope /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;