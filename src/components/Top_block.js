import React from 'react'
import '../styles/top_block.css'
import hero_png from '../img/hero.png';

function Top_block() {
    return (
        <>
        <div className="top_block">
            {/* <!-- Hero Start --> */}
        <div className="hero" id="home" style={{height: "90vh"}}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-content">
                            <div className="hero-text">
                                <p>I'm</p>
                                <h1>Kate Winslet</h1>
                                <h2></h2>
                                <div className="typed-text">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
                            </div>
                            <div className="hero-btn">
                                <a className="btn" href="">Hire Me</a>
                                <a className="btn" href="">Contact Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-none d-md-block">
                        <div className="hero-image">
                            <img src={hero_png} alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Hero End --> */}
        </div>
        </>
    )
}

export default Top_block
