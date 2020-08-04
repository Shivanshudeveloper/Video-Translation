import React, { Component } from 'react'
class Thankyou extends Component {
	state = {}
	render() {
		return (
			<React.Fragment>
				<div className='App'>
					<div className='outer'>
						<img
							class='img img-fluid w-25 logoAicte'
							src='https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png'
							alt='AICTE Logo'
							srcset=''
						/>
						<br />
						<h2>Thank you for applying with us</h2>
						<h5>
							We will get back to the shortlisted candidates soon
						</h5>
<div className="buttonOuter">
<a href='https://free.aicte-india.org/video/index.php'>

						<div className='button buttonThanks'>Log Out</div>
                        </a>
</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default Thankyou
