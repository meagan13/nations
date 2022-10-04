import React from "react";
import treat_locations from "../treat_locations";

function Bars() {
    return (
        <div className="bars-div page-div">
            <h1 className="page-header">Participating Businesses</h1>

            <div className="logo-div">
            { treat_locations.map(treat => {
                return (
                    <div>
                        <div className="one-logo-div">
                            <a href={ treat.website } target="_blank" rel="noopener noreferrer">
                                <img src={ treat.logo } alt={ treat.alt } className="logo-img"></img>
                            </a>

                            <label className="checkbox-label">
                                <input type="checkbox" name="checkbox" />{ treat.name }
                            </label>
                        </div>
                    </div>
                )
            })}
            </div>

        </div>
    );
}

export default Bars;