import React from "react";
import "./Wcr.css";
import Arch from './../../assets/arch.png'
import Alg from './../../assets/alg.png'

const Wcr = () => {
	return (
		<div className="wcr">
			<h1 className="wcrheading">
				Effective Aquatic Waste Removal through Lake Cleaning Robot for
				Smart City Environment
			</h1>
			<div className="wrctext">
				<h2>Introduction</h2>
				<p>
					Water is an important natural resource vital for all forms
					of life in this planet. Despite of having blessed with
					enormous amount of water, water pollution is a major crisis
					in many countries. As per „Water aid‟, an organization
					striving towards attaining fulfillment in hygiene and water
					sanitation has reported that 80% of the India‟s water
					sources are polluted.
				</p>
				<p>
					Water bodies are being polluted by floating garbage, weeds,
					debris plastic, sewage, effluents, toxic materials from
					industries. Water pollution with floating garbage is a
					serious issue needs immediate attention in developing
					countries.
				</p>
				<p>
					In Indian context, the union government is keen on projects
					such as „Swachh Bharat‟ and „Smart city‟ for achieving Clean
					and Smart India mission . Further projects like „Namami
					Gange‟, „Narmada Bachao‟ focus towards rejuvenation of
					rivers through effective pollution control and management.
					River surface cleaning, to remove the solid floating waste
					is one of the prime objective of the above projects. Indian
					government has invested enormous amount towards river
					cleaning project.{" "}
				</p>
				<p>
					As per the statistics of Central Pollution Control Board
					(CPCB) , there has been a significant rise in water
					pollution in water bodies over the past few
					years.Furthermore, the water quality index also claims that
					the river water is unfit for bathing, drinking and fishing.
				</p>
				<p>
					An article in „The Hindu‟ titled „Cleaning up the Cauvery‟
					[3], describes the importance of rejuvenation of the river
					which is being contaminated by floating wastes and plastics.
					A report published in a newspaper [4] states that, the state
					of Indian rivers are bad and worsening, owing to high levels
					of pollution. As a result biological oxygen demand has
					dropped beyond the required limits. The current scenario of
					indian rivers, calls for nationwide strategy for cleaning
					rivers.
				</p>
				<p>
					Manual cleaning of water bodies is inefficient, time
					consuming, laborious and expensive. In addition, health and
					hygiene of the laborers doing manual cleaning becomes
					severely affected. Health impacts also include
					musculoskeletal, intestinal and vector borne diseases in
					addition to injuries caused as a result of work related
					accidents. This demands techniques, to automate the existing
					infrastructure for river surface cleaning, at low cost with
					minimal hardware used by layman and general public.
				</p>
				<p>
					Hence to overcome this major problem of waste collection
					Lake Cleaning Robot is developed. This project aims to
					provide automatic control to collect the garbage. This lake
					cleaning system uses Raspberry Pi along with proximity
					sensors for detection and DC motors for movement. When the
					sensor detects static obstacle, the rotating blades start
					and the garbage is pushed into a bin which is placed right
					behind the mechanism. The performance of the baseline
					prototype model of the proposed system tested in a real time
					emulated environment, justifies the use of lake cleaning
					robot towards control and management of aquatic waste.
				</p>
				<p>The significant contributions in this work are:</p>
				<ol>
					<li>
						To collect nonliving garbage wastes from water bodies
						through lake cleaning robot.
					</li>
					<li>
						To provide a cost effective embedded system based
						solution for river surface cleaning and garbage
						dissemination.
					</li>
					<li>
						Towards improving the efficacy of aquatic waste
						management and control, thereby achieving smart city and
						clean India mission objectives.
					</li>
				</ol>
				<p>
					IoT based solution was proposed for monitoring the status of
					the dustbin and e-mail notification is sent to the user.A
					mechanical model for drainage system cleaning using
					propeller, cleaner, belt drives and pan is proposed in [13].
					The system was tested on rainy days in three different
					months to evaluate the effectiveness of the developed
					system. The system performed to a considerable extent in all
					possible test conditions.
				</p>
				<p>
					A pedal operated boat to clean the surface wastes and debris
					is described in . The setup consists of a pedal operated
					boat with propellers attached to the shaft and conveyer belt
					for collecting the wastes. A prototype model with design
					specifications is also explained.
				</p>
                <img className="wimg" src={Arch} alt="broken"/>
				<h2>Workflow of the Algorithm in Lake Cleaning Robot</h2>
				<ol>
					<li>Start</li>
					<li>Import the main function from the GPIO pins.</li>
					<li>
						The timing constants for the delay of the gripper and
						rotational motor are specified.
					</li>
					<li>
						The GPIO Broadcom mode is set. This mode involves ARM
						architecture.
					</li>
					<li>The input and the output pins are setup</li>
					<li>Initially the relay is OFF.</li>
					<li>
						The message is displayed on the LCD and the process
						enters the while loop.
					</li>
					<li>
						The ultrasonic sensor detects the object, then the
						Raspberry pi measures the distance and displays on the
						LCD.
					</li>
					<li>
						After a delay of 1 second, it checks if the distance is
						less than 15 cm. If true, the LCD displays the message
						and the front motor stops.
					</li>
					<li>
						The gripper motor will start to open for 15 seconds.
						After a delay of 5 seconds, the gripper motor will
						close.
					</li>
					<li>
						The rotational motors will then start and stop after 2
						seconds.
					</li>
					<li>
						The gripper motor again continues its process after a
						delay of 5 seconds followed by the rotational motor.
						Else, the front motor will continue to run.
					</li>
					<li>
						If IR sensor is low, „Garbage Full‟ is displayed on the
						LCD.
					</li>
					<li>
						The LCD functions and the commands are specified. The
						distance functions are defined. It is used to call the
						messages from the ultrasonic sensor and return the
						values.
					</li>
				</ol>
                <img className="wimg" src={Alg} alt="broken"/>
				<h2>Conclusion</h2>
				<p>
					A lake cleaning robot to remove surface wastes and garbage
					is proposed in this work. The proposed hardware consists of
					a Raspberry pi 3 board to control the movement of the robot
					along with gripper, motors, ultrasonic sensor and IR sensor.
					The developed lake cleaning robot can be used in all lakes
					and other static water bodies to clean the plastic and other
					floating wastes.
				</p>
				<p>
					This helps in decreasing the water pollution and thus
					providing a balanced environment and ecosystem. The more
					developed future product can also be made to work in flowing
					waters. It will also help in creating a balanced aquatic
					population in the lakes and proper utilization of water
					resources. Our future work focuses to improve the project by
					developing the robot to work in any waters bodies like
					rivers, oceans, etc. Furthermore, the use of image
					processing to differentiate the wastes as biodegradable and
					non- biodegradable may also be implemented in future. This
					will help to protect the aquatic animals, thus maintaining a
					balanced ecosystem.
				</p>
				<p>
					The project can be further improved by adding a GPS and
					wireless communication capabilities to give information to
					respective authority about the place where the wastes are
					being stored.
				</p>
			</div>
		</div>
	);
};

export default Wcr;
