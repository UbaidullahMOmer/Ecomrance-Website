import React from 'react'
import './Checkout.css'
function Checkout() {
  return (

<div className="container_checkout">

<header  action="">

	<div className="row">

		<div className="colen">

			<h3 className="title">billing address</h3>

			<div className="inputBox">
				<span className="spane">full name :</span>
				<input type="text" placeholder="Ubaidullah"/>
			</div>
			<div className="inputBox">
				<span className="spane">email :</span>
				<input type="email" placeholder="example@example.com"/>
			</div>
			<div className="inputBox">
				<span className="spane">address :</span>
				<input type="text" placeholder="room - street - locality"/>
			</div>
			<div className="inputBox">
				<span className="spane">city :</span>
				<input type="text" placeholder="Rahim Yar Khan"/>
			</div>

			<div className="flex">
				<div className="inputBox">
					<span className="spane">state :</span>
					<input type="text" placeholder="india"/>
				</div>
				<div className="inputBox">
					<span className="spane">zip code :</span>
					<input type="text" placeholder="123 456"/>
				</div>
			</div>

		</div>

		<div className="colen">

			<h3 className="title">payment</h3>

			<div className="inputBox">
				<span className="spane">cards accepted :</span>
				<img src="images/card_img.png" alt=""/>
			</div>
			<div className="inputBox">
				<span className="spane">name on card :</span>
				<input type="text" placeholder="mr. Ubaidullah"/>
			</div>
			<div className="inputBox">
				<span className="spane">credit card number :</span>
				<input type="number" placeholder="1111-2222-3333-4444"/>
			</div>
			<div className="inputBox">
				<span className="spane">exp month :</span>
				<input type="text" placeholder="january"/>
			</div>

			<div className="flex">
				<div className="inputBox">
					<span className="spane">exp year :</span>
					<input type="number" placeholder="2022"/>
				</div>
				<div className="inputBox">
					<span className="spane">CVV :</span>
					<input type="text" placeholder="1234"/>
				</div>
			</div>

		</div>

	</div>

	<input type="submit" value="proceed to checkout" className="submit-btn"/>

</header>

</div> 
  )
}

export default Checkout