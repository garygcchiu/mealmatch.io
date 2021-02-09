import React, { useState } from 'react';
import BlockTitle from './BlockTitle';
import ContactBgShape from '../assets/images/shapes/contact-bg-shape-1-1.png';
import ContactImage from '../assets/images/resources/contact-1-1.jpg';
import { sendContactEmail } from '../api/contact';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const submitContact = async () => {
        if (name && email && subject && phoneNumber && message) {
            const emailRes = await sendContactEmail(
                name,
                email,
                subject,
                phoneNumber,
                message
            );
            if (emailRes.status === 200 || emailRes.status === 204) {
                alert('Sent! We will get in touch soon!');
            } else {
                alert('Error sending form, please try again later.');
            }
        } else {
            alert('Please make sure all fields are filled!');
        }
    };

    return (
        <section className="contact-one" id={'contact'}>
            <img
                src={ContactBgShape}
                className="contact-one__bg-shape-1"
                alt=""
            />
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="contact-form-validated contact-one__form">
                            <BlockTitle
                                textAlign="left"
                                paraText="Contact Us"
                                titleText={'Have Question? \nWrite a Message:'}
                            />
                            <div className="row">
                                <div className="col-lg-6">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        name="subject"
                                        value={subject}
                                        onChange={(e) =>
                                            setSubject(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        name="phone"
                                        value={phoneNumber}
                                        onChange={(e) =>
                                            setPhoneNumber(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="col-lg-12">
                                    <textarea
                                        placeholder="Write Message"
                                        name="message"
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="col-lg-12 text-left">
                                    <button
                                        type="submit"
                                        className="thm-btn contact-one__btn"
                                        onClick={submitContact}
                                    >
                                        <span>Send Message</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="result" />
                    </div>
                    <div
                        className="col-lg-5 d-flex wow fadeInRight"
                        data-wow-duration="1500ms"
                    >
                        <div className="my-auto">
                            <div className="contact-one__image">
                                <img src={ContactImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
