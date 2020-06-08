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
								<div class="col-6">
									<h2 className="component-heading">Our Partners</h2>
									<img src={wwc} style={{width:"60%"}}/>
								</div>
								<div class="col-6">
									<h2 className="component-heading">Our Sponsers</h2>
									<img src={dgocean} style={{width:"40%"}}/>
								</div>
							</div>
						</div>
					</div>
					<div className="contribution">
						<h2 className="content-header">How Can I support Codeuino?</h2>
						<div className="row clearfix">
							<div className="column span_4">
								<h3 className="subheading">
									Become a contributor and solve a bug, implement a new feature or write a new unit test.
								</h3>
							</div>
							<div className="column span_4">
								<h3 className="subheading">Use the Projects and Apps built by Codeuino.</h3>
							</div>
							<div className="column span_4">
								<h3 className="subheading">Sponsor, donate to the Codeuino projects and help us grow bigger.</h3>
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