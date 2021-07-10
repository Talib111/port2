import React from 'react'
import testi_1 from '../img/testimonial-1.jpg'
import testi_2 from '../img/testimonial-2.jpg'
import testi_3 from '../img/testimonial-3.jpg'

function Testimony() {
    return (
        <>
            
            {/* <!-- Testimonial Start --> */}
        <div className="testimonial wow fadeInUp" data-wow-delay="0.1s" id="review">
            <div className="container">
                <div className="testimonial-icon">
                    <i className="fa fa-quote-left"></i>
                </div>
                <div className="owl-carousel testimonials-carousel">
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={testi_1} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={testi_2} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src={testi_3} alt="Image" />
                        </div>
                        <div className="testimonial-text">
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum. Lorem ipsum dolor sit amet consec adipis elit.
                            </p>
                            <h3>Customer Name</h3>
                            <h4>Profession</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Testimonial End --> */}
        </>
    )
}

export default Testimony
