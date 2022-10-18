import React from "react"

export default function Info() {
    return (
        <div>
            <img src="../src/assets/profile-picture.jpg" className="profile-pic"/>
            <h1 className="name">Laura Smith</h1>
            <h2 className="title">Frontend Developer</h2>
            <h3 className="website">laurasmith.website</h3>
            <div className="buttons">
                <button className="email-btn"><i className="fa-solid fa-envelope info-icon"></i>Email</button>
                <button className="linkedin-btn"><i className="fa-brands fa-linkedin info-icon"></i>LinkedIn</button>
            </div>
        </div>
    )
}