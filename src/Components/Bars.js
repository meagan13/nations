import React from "react";
import locations from "../locations";

function Bars() {
    return (
        <div className="bars-div page-div">
            <h1 className="page-header">Participating Businesses</h1>

            <div className="logo-div">
            { locations.map(bar => {
                return (
                    <div>
                        <div className="one-logo-div">
                            <a href={ bar.website } target="_blank" rel="noopener noreferrer">
                                <img src={ bar.logo } alt={ bar.alt } className="logo-img"></img>
                            </a>

                            <label className="checkbox-label">
                                <input type="checkbox" name="checkbox" />{ bar.name }
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