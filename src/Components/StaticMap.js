import React from "react";

function StaticMap() {
    return (
        <div className="static-map-div">
            
            <div className="map-img-div">
                <img className="map-img" src="../logos/DoT_Map.png" alt="Map of bar crawl stops"/>
            </div>

            <div className="map-listing-div">
                <p className="bar-name">The Silo Market</p>
                <p className="treat-name">Urban Sweat</p>
                <p className="treat-name">ABLE</p>
                <p className="bar-name">Southern Grist Brewing Co.</p>
                <p className="bar-name">Harding House Brewing Co.</p>
                <p className="treat-name">Tinwings</p>
                <p className="bar-name">Fat Bottom Brewing</p>
                <p className="bar-name">Bringle's Smoking Oasis</p>
                <p className="treat-name">ISI Elite Training</p>
            </div>
        </div>
    )
}

export default StaticMap;