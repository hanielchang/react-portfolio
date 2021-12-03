import React from 'react';
import { GoMarkGithub } from "react-icons/go";
import { IoLogoLinkedin } from "react-icons/io";

function Footer() {
    return (
        <section className="footer my-5">
            <h1 className="mx-2">Link to Profiles</h1>
            <p className="flex-row mx-2">
                <div className="github">
                    <GoMarkGithub /> <a href="https://github.com/hanielchang" >Github Profile</a>
                </div>
                <div className="linkedin">
                    <IoLogoLinkedin /> <a href="https://www.linkedin.com/in/haniel-chang-a1a657ab/" >LinkedIn Profile</a>
                </div>
            </p>
        </section>
    );
}

export default Footer;