import React from 'react';
import Banner from './ContactBanner';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Banner></Banner>
            <section className="contact-us py-5">
                <div className="container">
                    <div className="row align-items-center grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h2 className="section-title">Contact Us</h2>
                            <p className="section-subtitle">Feel free to get in touch with us for any inquiries.</p>
                            <form className="contact-form">
                                <div className="mb-3">
                                <input type="text" placeholder="Name" className="input input-ghost w-full max-w-xs" />
                                </div>
                                <div className="mb-3">
                                <input type="text" placeholder="Email" className="input input-ghost w-full max-w-xs" />
                                </div>
                                <div className="mb-3">
                                <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" />
                                </div>
                                <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-[#ff9900] transition-colors  ">Send Message</button>
                            </form>
                        </div>
                        <div className="col-lg-6">
                        <h2 className="section-title">Address</h2>
                        <p className="section-subtitle">Visit Our Office.</p>
                            <div className="contact-info">
                                <ul className="list-unstyled contact-details">
                                    <li><i className="bi bi-geo-alt-fill"></i>Location: Mirpur, Dhaka, Bangladesh</li>
                                    <li><i className="bi bi-telephone-fill"></i>Phone: +88 01750 000 000</li>
                                    <li><i className="bi bi-envelope-fill"></i>Email: info@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;