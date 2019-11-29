import React, { Component } from 'react'

export default class DeliveryFee extends Component {

	constructor(props){
		super(props);
		this.state = {
			residence: "Abuja",
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

						  <select onChange={this.getMethod} >
								<option value="regular">Regular</option>
								<option value="doorstep">Doorstep</option>
							</select>
	
	 
	
						<select name="location" 
						value={this.state.residence} onChange={this.getResidence}>
						<option value="">Select State</option>
						<option value="Lagos">Lagos</option>
						<option value="Abuja">Abuja</option>
						<option value="Portharcourt">Portharcourt</option>
						<option value="Aba">Aba</option>
						<option value="Akure">Akure</option>
						<option value="Asaba">Asaba</option>
						<option value="Auchi">Auchi</option>
						<option value="Benin">Benin</option>
						<option value="Calabar">Calabar</option>
						<option value="Enugu">Enugu</option>
						<option value="Ibadan">Ibadan</option>
						<option value="Ikot">Ikot Ekpene</option>
						<option value="Jos">Jos</option>
						<option value="Kaduna">Kaduna</option>
						<option value="Kano">Kano</option>
						<option value="Mararaba">Mararaba</option>
						<option value="Makurdi">Makurdi</option>
						<option value="MInna">Minna</option>
						<option value="Onitcha">Onitsha</option>
						<option value="Owerri">Owerri</option>
						<option value="Uyo">Uyo</option>
						<option value="Warri">Warri</option>
						</select>
		
				</div>
			</>
		);
	}
}