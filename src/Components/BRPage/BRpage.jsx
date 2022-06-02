import React, { useState } from "react";
import "./BRpage.css";
import info from './../../Information/info'

const BRPage = () => {
	const [subs, setSubs] = useState(null);
	if (!subs) {
		return (
			<div className="Brpage">
				<div className="brcontainer">
					<div className="brheading">THE BLUE REVOLUTION</div>
					<div className="subsectionscon">
						<div className="subsection" onClick={()=>{setSubs("WHAT")}}>WHAT</div>
						<div className="subsection" onClick={()=>{setSubs("WHEN")}}>WHEN</div>
						<div className="subsection" onClick={()=>{setSubs("OBJECTIVES")}}>OBJECTIVES</div>
						<div className="subsection" onClick={()=>{setSubs("FEATURES")}}>FEATURES</div>
						<div className="subsection" onClick={()=>{setSubs("OUTCOMES")}}>OUTCOMES</div>
					</div>
				</div>
			</div>
		);
	} else {
        console.log()
		return (
			<div className="Brpage">
				<div className="brcontainer2">
					<div className="lpanel">
						<div className="lpheading">THE BLUE REVOLUTION</div>
						<div className="subsection" style={subs==='WHAT'?{color:"white"}:{}} onClick={()=>{setSubs("WHAT")}}>WHAT</div>
						<div className="subsection" style={subs==='WHEN'?{color:"white"}:{}} onClick={()=>{setSubs("WHEN")}}>WHEN</div>
						<div className="subsection" style={subs==='OBJECTIVES'?{color:"white"}:{}} onClick={()=>{setSubs("OBJECTIVES")}}>OBJECTIVES</div>
						<div className="subsection" style={subs==='FEATURES'?{color:"white"}:{}} onClick={()=>{setSubs("FEATURES")}}>FEATURES</div>
						<div className="subsection" style={subs==='OUTCOMES'?{color:"white"}:{}} onClick={()=>{setSubs("OUTCOMES")}}>OUTCOMES</div>
					</div>
					<div className="rpanel"><div className="rptext">{info[subs]}</div></div>
				</div>
			</div>
		);
	}
};

export default BRPage;
