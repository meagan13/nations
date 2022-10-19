import React from "react";

function NNA() {

    return(
        <div className="nna-div">
            <h1 className="page-header">The Nations Neighborhood Association</h1>
            <div className="nna-about-links">
                <div className="link-div">
                    <a href="https://www.instagram.com/thenations615/?hl=en">
                        <img src="/instagram_logo.png" alt="instagram logo" className="about-img"></img>
                        <h2>Follow us on Instagram</h2>
                    </a>
                </div>

                <div className="link-div">
                    <a href="https://www.thenations615.com/join-the-nna">
                        <img src="/home.png" alt="neighborhood icon" className="about-img"></img>
                        <h2>Join the NNA</h2>
                    </a>
                </div>

                <div className="link-div">
                    <a href="https://www.thenations615.com/news">
                        <img src="/calendar.png" alt="calendar icon" className="about-img"></img>
                        <h2>Upcoming Events</h2>
                    </a>
                </div>
            </div>
            
            {/* <hr></hr>

            <div className="nna-about-text">
                <h2 className="about-mission">NNA Mission</h2>
                <p className="about-nna-text">
                    The Nations Neighborhood Association exists to enhance residents’ quality of life by bringing neighbors together for monthly meetings, 
                    sharing important city and neighborhood information, coordinating community-building initiatives, supporting local businesses, 
                    creating a safe and welcoming environment for all neighbors, and advocating for community-identified change.
                </p>
                <p className="about-nna-text">The NNA is a volunteer-run nonprofit organization, and membership is free and open to anyone who lives or owns property/a business in The Nations.</p>
            </div> */}


        </div>
    )
}

export default NNA;