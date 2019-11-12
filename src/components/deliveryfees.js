import React, { Component } from 'react';

export default class Deliveryfees extends Component {

	constructor(props){
		super(props);
		this.state = {
			residence: "abuja",
			method: 'regular',
			fee: "1000"
		};
	};

		
	getResidence = (e) => {
		let val = e.target.value;
		this.setState(()=>{
			return {residence: val};
		}, () => {
			this.getDeliveryMethod();
		});
		
	};

	getMethod = (e) => {
		let val = e.target.value;
		this.setState(()=>{
			return {method: val};
		}, ()=> {
			this.getDeliveryMethod();
		});
		
	};

	deliverFee=(location)=> {
		var result = "";
	
		var lookup = {
			"abuja": 1000,
			"lagos": 1500,
			"ibadan": 1500,
			"portharcourt": 1500,
			"benin": 1500,
			"owerri": 1500,
			"asaba": 2000,
			"minna": 1500,
			"jos": 2000,
			"kaduna": 1500,
		};
		result = lookup[location];
		return result;
	}

	getDeliveryMethod=()=>{
		let residence = this.state.residence;
		let deliveryfee = this.deliverFee(residence);
		let method = this.state.method;

		if (method !== "regular" && residence !== "abuja") {
			deliveryfee += 2000;
		};
		this.setState(()=>{
			return {fee: deliveryfee};
		});
	};
	

	render() {
		
		return (
			<>
				<div className="text-right text-capitalize col-12">shipping:
					<strong><span id="deliveryFee">{this.state.fee}</span></strong>
				</div>
					<div className="d-flex">
					<form>
						  <select onChange={this.getMethod} >
								<option value="regular">Regular</option>
								<option value="doorstep">Doorstep</option>
							</select>
						</form>
	 
					<form>
						<select name="residence" 
						value={this.state.residence} onChange={this.getResidence}>
						<option value="">Select State</option>
						<option value="abuja">Abuja</option>
						<option value="lagos">Lagos</option>
						<option value="ibadan">Ibadan</option>
						<option value="portharcourt">Portharcourt</option>
						<option value="asaba">Asaba</option>
						</select>
					</form>
				</div>
			</>
		);
	}
}
