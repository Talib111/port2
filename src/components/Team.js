import React from 'react'
import team_1 from '../img/team-1.jpg'
import team_2 from '../img/team-2.jpg'
import team_3 from '../img/team-3.jpg'
import team_4 from '../img/team-4.jpg'
// import {RiFacebookFill} from 'react-ci'

function Team() {
    return (
        <>
              {/* <!-- Team Start --> */}
        <div className="team" id="team">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Team</p>
                    <h2>Expert Team Members</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={team_1} alt="Image" />
                            </div>
                            <div className="team-text">
                                <h2>Mollie Ross</h2>
                                <h4>Web Designer</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus
                                </p>
                                <div className="team-social">
                                    <a className="btn" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={team_2} alt="Image" />
                            </div>
                            <div className="team-text">
                                <h2>Dylan Adams</h2>
                                <h4>Web Developer</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus
                                </p>
                                <div className="team-social">
                                    <a className="btn" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={team_3} alt="Image" />
                            </div>
                            <div className="team-text">
                                <h2>Jennifer Page</h2>
                                <h4>Apps Designer</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus
                                </p>
                                <div className="team-social">
                                    <a className="btn" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="team-img">
                                <img src={team_4} alt="Image" />
                            </div>
                            <div className="team-text">
                                <h2>Josh Dunn</h2>
                                <h4>Apps Developer</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consec adipis elit. Etiam accum lacus
                                </p>
                                <div className="team-social">
                                    <a className="btn" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Team End --> */}
        </>
    )
}

export default Team
