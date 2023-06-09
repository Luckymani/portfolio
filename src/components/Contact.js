import React, { useState } from "react";
import "../css/contact.css";
import emailjs from "emailjs-com";

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

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm("service_r53e439", "template_ljzi8x3", e.target, "CNuZ8dVnv0lXw13SL")
			.then((result) => {
				console.log(result.text);
				setFormData({
					name: "",
					email: "",
					phone: "",
					message: "",
				});
				window.alert("message sent succesfully");
			})
			.catch((error) => {
				console.log(error.text);
			});
	};

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
					<input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="name" />

					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email" />

					<label htmlFor="phone">Phone No:</label>
					<input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="phone no (optional)" />

					<label htmlFor="message">Message:</label>
					<textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="your message here" />

					<button type="submit">Send</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
