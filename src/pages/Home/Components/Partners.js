import React from 'react'
import wwc from '../images/wwc.jpeg';
import dgocean from '../images/dgocean.svg';
import DonateCard from '../../../components/DonateUs/Donate'
import './common.css'
const Partners = () => {
    return (
        <section id="collaborate">
				<div>				
						<div className="container" style={{justifyContent:"space-evenly",display:"flex",marginTop:50}}>
							<div class="row">
								<div class="col-12">
									<h2 className="component-heading">Our Patrons</h2>
									<img className="patron" src={dgocean}/>
									<img className="patron" src={wwc}/>
								</div>
							</div>
						</div>
					</div>
					<div className="contribution container">
						<h2 className="content-header">How Can I support Codeuino?</h2>
						<div className="row clearfix">
							<div className="column span_4">
								<h3 className="subheading" style={{ "textAlign": "left"}}>
									Become a contributor and solve a bug, implement a new feature or write a new unit test.
								</h3>
								<p style={{ "textAlign": "left"}}>
									We are looking for your expertise, be it as a software developer, hardware maker, designer or administrator. Please join us and contribute to our projects on Github. Solving a bug, implementing a new feature, writing unit tests and giving feedback on existing projects is the first step before joining Codeuino coding programs.
								</p>
							</div>
							<div className="column span_4">
								<h3 className="subheading" style={{ "textAlign": "left"}}>Use the Projects and Apps built by Codeuino.</h3>
								<p style={{ "textAlign": "left"}}>By using Codeuino applications and sharing your knowledge about our Open Source applications you help us to achieve our goal a lot already. And, we need your support to continue the work for sharing of knowledge, code and design and organizing events and meetups. Please consider donating to our cause and help us to improve people's lives by offering open access to knowledge, ideas and digital tools. Spread free knowledge and share about Codeuino. Go to events and give a presentation about Codeuino. Get in touch with meetups and propose a talk. Or you can start by becoming a volunteer at Codeuino events</p>
							</div>
							<div className="column span_4">
								<h3 className="subheading" style={{ "textAlign": "left"}}>Sponsor, donate to the Codeuino projects and help us grow bigger.</h3>
								<p style={{ "textAlign": "left"}}>If you use/adopt Codeuino projects or applications inside your company, sponsoring a Codeuino event or project is a great way to act as a good citizen of the society and enhancing your visibility in the global tech community. Being a featured partner of Codeuino gives you direct access to skilled developers and Open Source leaders for recruitment.</p>
							</div>
						</div>
					</div>
                    <div className="mb-5">
					    <DonateCard/>
                    </div>

				</section>
    )
}
export default Partners