import React from "react";

function Crawl() {
    return (
        <div className="crawl-div">
            <h1 className="page-header">Join the Crawl</h1>
            <h2>Check In</h2> 
            <ul className="crawl-list" id="check-in">
                <li className="list-item">Be 21 or older</li>
                <li className="list-item">Check in at the registration table</li>
                <li className="list-item">Sign a liability waiver</li>
                <li className="list-item">Enjoy a beverage at The Silo Market until your group is ready to crawl!</li>
            </ul>

            <br></br>

            <h2>Crawl</h2>
            <ul className="crawl-list" id="crawl">
                <li className="list-item">Groups will depart every 15 minutes or so</li>
                <li className="list-item">Please stay on the sidewalk or walk against traffic if no sidewalk is available, and be aware of your surroundings</li>
                <li className="list-item">Consider enjoying the snacks and non-alcoholic beverage options available at our amazing local establishments</li>
                <li className="list-item">Stay hydrated!</li>
            </ul>

            <br></br>

            <h2>Win!</h2>
            <ul className="crawl-list" id="win">
                <li className="list-item">The participant with the best costume will win a prize</li>
                <li className="list-item">All participants will be entered into a random drawing for prizes</li>
                <li className="list-item">Many thanks to our local businesses for donating some amazing treats!</li>
            </ul>
        </div>
    )
}

export default Crawl;