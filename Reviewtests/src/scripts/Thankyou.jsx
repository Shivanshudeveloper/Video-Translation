import React, { Component } from 'react'
class Thankyou extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className='App thanksOuter'>

					<div className='outer thanks'>
						<img
							class='img img-fluid w-25 logoAicte'
							src='https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png'
							alt='AICTE Logo'
							srcset=''
						/>
						<br />
						<h2>Thank you for submission we will get back to you soon</h2>
						

						<h5>
							We will get back to the shortlisted candidates soon <br />Help email ID: <a href="mailto:Translation@aicte-inida.org"> Translation@aicte-inida.org</a>
						</h5>
						<div className='buttonOuter'>
							<a href='https://free.aicte-india.org/video/index.php'>
								<div className='button buttonThanks'>
									Log Out
								</div>
							</a>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Thankyou
