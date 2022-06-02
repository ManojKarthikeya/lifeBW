import React from "react";
import "./Cepage.css";
import { ReactComponent as Bulb } from "./../../assets/idea-svgrepo-com.svg";

const Cepage = () => {
	return (
		<div className="Cepage">
			<div className="tips">
				<div className="tip">
					<Bulb className="svgbulb" />
					<p>
						Find a Goal 14 charity you want to support. Any
						donation, big or small, can make a difference!
					</p>
				</div>
				<div className="tip">
					<Bulb className="svgbulb" />
					<p>
						Never buy bottled water – boil, filter, chlorine,
						rainwater, do what you can.
					</p>
				</div>
				<div className="tip">
					<Bulb className="svgbulb" />
					<p>
						Run a campaign on the effects of plastic use on the seas
						and oceans.
					</p>
				</div>
				<div className="tip">
					<Bulb className="svgbulb" />
					<p>
						Buy local and certified fish. You can support
						small-scale producers by shopping in local markets and
						shops.
					</p>
				</div>
				<div className="tip">
					<Bulb className="svgbulb" />
					<p>
						Organize a cleanup project for rivers and oceans. Engage
						your whole community to clean up a local river, seaside
						or an ocean.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Cepage;
