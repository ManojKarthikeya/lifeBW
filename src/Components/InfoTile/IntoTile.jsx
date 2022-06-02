import React from "react";
import './InfoTile.css';

const InfoTile = (props) => {
    return <div className="InfoTile">
        <div className="InfotileHeadding">{props.heading}</div>
        <div className="InfoTileContent"><props.content/></div>
    </div>
}

export default InfoTile;

