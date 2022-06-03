import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="Header">
			<Link to='/' className="tab">
				<div className="company">
					LIFE<span style={{ color: "#1C658C" }}>BW</span>
				</div>
			</Link>
			<div className="tabs">
				<Link to="blue-revolution" className="tab">
					BLUE REVOLUTION
				</Link>
				<Link to="contribute" className="tab">
					CONTRIBUTE
				</Link>
				<Link to="AWCR" className="tab">
				AWCR
				</Link>
			</div>
		</div>
	);
};

export default Header;
