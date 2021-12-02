import React from 'react';

function About() {
    return (
        <section className="my-5">
            <div>
                <h1 id="about">About me</h1>
                <img
                    src='../../assets/profile.jpg'
                    alt=''
                    className="img-thumbnail mx-1"
                    key=''
                />
            </div>

            <p>
                Welcome to my portfolio. I am part of the UCSB alumni class of 2020. I studied Physics with an emphasis
                in electronics, including some software. While my interest in the theoretical side is strong, I found
                computer science to be quite intriguing. Coding first appeared strange to me, but as I realized the power of it,
                I started to appreciate practicing it more and more. This inspired my motivation to pursue coding even after
                graduating UCSB. This led me to completing a full 6 months of coding bootcamp! I always look to improve my skillset
                and knowledge, as well as make new connections.
            </p> <br />
            <p>
                Apart from working and doing coding, I also like to play video games and dance.Halo is one of my favorite video games,
                along with others such as Starcraft and Gears of War. Dancing to me is very important, because it always my brain to get out of working
                mode and drift into a more creative side.Apart from expressing mental creativity, it also keeps me in great shape.Hip hop dance
                is my most practiced type of dance.I also enjoy salsa dance.
            </p>

        </section>
    );
}

export default About;