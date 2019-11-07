import React, { Component } from 'react'

export default class Deliveryfees extends Component {

	constructor(props){
		super(props);
		this.state = {
			residence: "abuja",
			method: 'regular',
			fee: ""
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
			"abuja": 1,
			"lagos": 2,
			"ibadan": 3,
			"portharcourt": 4,
			"benin": 5,
			"owerri": 6,
			"asaba": 7,
			"minna": 8,
			"jos": 9,
			"kaduna": 10,
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
			<div className="paddit">
				<h1>delivery options</h1>
	<div>
		<h2>
			State: 
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
			
		</h2>
		
		<h2>Delivery Method</h2>
		<div>
		<form>
				<input onChange={this.getMethod} type="radio" value="regular" name="deliverType"/>Regular Deliver
			<input onChange={this.getMethod}  type="radio" name="deliverType" value="doorstep"/>Doorstep Delivery
			
			</form>
		</div>
	</div>
	<p>location:
		<span id="delivery-state">{this.state.residence}</span>
	</p>
	<p>delivery method:
		<span id="delivery-type">{this.state.method}</span>
	</p>
	<p>delivery fee:
		<span id="deliveryFee">{this.state.fee}</span>
	</p>
			</div>
		);
	}
}
