import React from "react";
import locations from "../locations";

function Bars() {
    return (
        <div className="bars-div page-div">
            <h1 className="page-header">Drink-or-Treat Stops</h1>

            <div className="logo-div">
            { locations.map(bar => {
                return (
                    <div>
                        <div className="one-logo-div">
                            <a href={ bar.website } target="_blank" rel="noopener noreferrer">
                                <img src={ bar.logo } alt={ bar.alt } className="logo-img"></img>
                            </a>

                            <h2>{ bar.name }</h2>
                            <h4 className="special">{ bar.special }</h4>
                        </div>
                    </div>
                )
            })}
            </div>

        </div>
    );
}

export default Bars;