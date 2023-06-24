import React from "react";
import "./footer.css";
import {faHouse } from "@fortawesome/free-solid-svg-icons"
import {faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






const Footer = () => {
  return (
    <footer class="footer-distributed">

			<div class="footer-left">
          <img src="https://media.istockphoto.com/id/1224223178/vector/easy-button-easy-sign-key-push-button.jpg?s=612x612&w=0&k=20&c=IeWp59BP7SW-3VH5p4AHTEMPGE1PP0GQprP6yLgLCV4="/>
				<h3>Easy<span>Booking</span></h3>

				<p class="footer-links">
					<a href="#">Home</a>
					|
					<a href="#">Blog</a>
					|
					<a href="#">About</a>
					|
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">© 2023 EasyBooking LTD</p>
			</div>

			<div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					  <p><span>309 - Rupa Solitaire,
						 Bldg. No. A - 1, Sector - 1</span>
						DhandMondi, Dhaka</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+880 1710-419479</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@easybooking.com">support@easybooking.com</a></p>
				</div>
			</div>
			<div class="footer-right">
				<p class="footer-company-about">
					<span>About the company</span>
					We are finding for you best services.Like hotel, aroplane service, 
          we are helping to manage booking service for you</p>
				<div class="footer-icons">
					<a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookSquare} /></a>
					<a href="#"><FontAwesomeIcon icon={faTwitterSquare} /></a>
					<a href="#"><FontAwesomeIcon icon={faInstagramSquare} /></a>
					<a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          
				</div>
			</div>
		</footer>

  )
}

export default Footer;
