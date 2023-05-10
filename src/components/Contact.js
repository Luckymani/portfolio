import React, { useState } from "react";
import "../css/contact.css";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	}

	function handleSubmit(event) {
		event.preventDefault();
		// console.log(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`);
	}

	return (
		<section className="contact" id="contact">
			<h2>contact</h2>
			<p>Hey! leave a message</p>
			<div className="contact_wrapper">
				<div className="mail_icon">
					<img alt="mailicon" src="/images/mail icons.svg"></img>
					<ul className="social_media_icons">
						<li>
							<img alt="linkedin icon" src="/images/linkedin icon.png"></img>
						</li>
						<li>
							<img alt="github icon" src="/images/github icon.png"></img>
						</li>
						<li>
							<img alt=" youtube icons" src="/images/youtube icon.png"></img>
						</li>
						<li>
							<img alt="instagram icon" src="/images/instagram icon.png"></img>
						</li>
					</ul>
				</div>
				<form onSubmit={handleSubmit} className="form">
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

					<label htmlFor="phone">Phone No:</label>
					<input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />

					<label htmlFor="message">Message:</label>
					<textarea id="message" name="message" value={formData.message} onChange={handleChange} required />

					<button type="submit">Send</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
