import React from "react";

function About() {
    return (
        <div className="about-div">
            <h1 className="page-header">Join the Crawl</h1>
            <h2>Safety = Fun!</h2> 
            <ul className="crawl-list">
                <li className="list-item">The Nations Bar Crawl is only for neighbors who are age 21 or older.</li>
                <li className="list-item">Secure a safe ride in advance - or plan to walk!</li>
                <li className="list-item">Consider enjoying the snacks and non-alcoholic beverage options available at our amazing local establishments.</li>
            </ul>

            <h2>Prizes = Fun!</h2>
            <ul className="crawl-list">
                <li className="list-item">Share a pic to a public Instagram acount about your #NationsBarCrawl experience</li>
                <li className="list-item">Winners will be randomly selected from among public posts</li>
                <li className="list-item">Prizes will be available at the Nations Neighborhood Association meeting Oct. 24</li>
                <li className="list-item">Winners will be able to choose their own prizes on a first-come, first-served basis</li>
            </ul>
        </div>
    )
}

export default About;