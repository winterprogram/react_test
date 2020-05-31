import React, { Component, useState } from 'react';
import './home.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Home extends Component {
    render() {
        return (
            <Router>
                <div className="bgcolor" >
                    <nav className="navbar navbar-expand-lg">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">

                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                                <Link to={'/'} className="nav-link">Features<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Solutions
        </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link">Client Success</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Resources
        </Link>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-secondary">Demo</button>
                    </nav>
                </div>
            </Router>


        )
    }
}

class HomeData extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrow: true,
            slidesToScroll: 1
        };
        return (
            <div className="row">
                <div className="col-lg-6">
                    <div className="jumbotron color">
                        <p className="lead">Improve sales enablement,</p>
                        <h1 className="display-4">Effortlessly</h1>
                        <p>with mobile games built arround engaging learning content.</p>
                        <Link to={'/login'} className="btn btn-primary btn-lg" role="button" >
                            Try free Microskill
        </Link>
                        {/* <a className="btn btn-primary btn-lg" href="#" role="button"></a> */}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div>
                        <h2> Image slider part</h2>
                        <Slider {...settings}>
                            <div>
                                <h3>1</h3>

                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                        </Slider>
                    </div>
                </div>

            </div>

        )
    }
}

export { Home, HomeData }