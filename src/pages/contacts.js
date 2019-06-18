import React, {useState} from "react";
import Layout from "../components/layout";
import axios from 'axios';
import settings from '../assets/settings.json';
import SEO from "../components/seo";
import seoJson from "../assets/seo.json";
import { useGallery } from "../hooks/gallery-hook";

const Contacts = () => { 
    const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const ContactPersonGallery = useGallery("contact");

	const resetForm = () => {
		setName("");
		setMobile("");
		setEmail("");
		setMessage("");
	}

	const sendEmail = (evt) => {
		evt.preventDefault();
		const data = {
			subject: settings.subject,
			text: 'From: '.concat(email, '\r\n', 'Name: ', name, '\r\n', 'Mobile: ', mobile, '\r\n', 'Message: ', message)
		};

		axios.post(settings.emailHost, data)
			.then((res) => {resetForm(); alert("Mail sent Successfully");})
			.catch(err => console.log(err));
    }
    

    return <Layout>
		<SEO title="Nav Technology Contact" description={seoJson["decription"]} keywords={seoJson["keywords"]}/>
        <div className="contact-container">
			<div className="contact-tile">
                <form onSubmit={sendEmail}>
					<table className="contact-table">
						<tbody>
							<tr>
								<td>
									<label>Name <span className="highlight">*</span></label>
								</td>
								<td>
									<input type="text" required name="name" value={name} onChange={e => setName(e.target.value)} />
								</td>
							</tr>
							<tr>
								<td>
									<label>Mobile <span className="highlight">*</span></label>
								</td>
								<td>
									<input type="text" pattern="[0-9]*" required name="mobile" minLength="10" maxLength="10" value={mobile} onChange={e => setMobile(e.target.value)} />
								</td>
							</tr>
							<tr>
								<td>
									<label>Email <span className="highlight">*</span></label>
								</td>
								<td>
									<input type="email" required pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" name="email" value={email} onChange={e => setEmail(e.target.value)} />
								</td>
							</tr>
							<tr>
								<td>
									<label>Message</label>
								</td>
								<td>
									<textarea rows="6" name="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
								</td>
							</tr>
							<tr>
								<td colSpan="2">
									<button type="submit" className="mailButton">Contact</button>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
                <div className="notes"> Fields marked with <span className="highlight">*</span> are required</div>
            </div>
            {ContactPersonGallery}
			<div className="address-tile">
                <div><span className="highlight">Address -</span> 130 A, Bagmari Road , Scheme VII-M, Near Bagmari Kabarsthan, Kolkata, West Bengal 700054 </div> 
                <div><span className="highlight">Email -</span> navtcit@yahoo.com</div>
                <div><span className="highlight">Phone -</span> 9831721892 </div> 
				<iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.864199375542!2d88.38912691495979!3d22.58418188517678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02766e0d356f69%3A0x40e760832c69a029!2sNav+Technology+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1560158643437!5m2!1sen!2sin"></iframe>
            </div>
		</div>
    </Layout>
}
export default Contacts;