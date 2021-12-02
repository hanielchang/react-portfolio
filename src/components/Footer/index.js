import React from 'react';

function Footer() {
    return (
        <section className="footer my-5">
            <h1 className="mx-2">Link to Profiles</h1>
            <p className="flex-row mx-2">
                <a href="https://github.com/hanielchang" className="mx-2">Github Profile</a>
                <a href="https://www.linkedin.com/in/haniel-chang-a1a657ab/" className="mx-2">LinkedIn Profile</a>
            </p>
        </section>
    );
}

export default Footer;