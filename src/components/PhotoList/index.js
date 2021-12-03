import React, { useState } from 'react';

const PhotoList = ({ category }) => {

    const [projects] = useState([
        {
            name: 'Online PC store',
            category: 'projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            link: 'https://shop-pc-parts.herokuapp.com/',
            github: 'https://github.com/hanielchang/SHOP_PC_PARTS'
        },
        {
            name: 'Ticket Support System',
            category: 'projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            link: 'https://shielded-cove-82320.herokuapp.com/',
            github: 'https://github.com/hanielchang/Ticket-Support'
        },
        {
            name: 'Weather Park Search',
            category: 'projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            link: 'https://kylekilmartin371.github.io/group-project/',
            github: 'https://github.com/hanielchang/group-project'
        },
        {
            name: 'Work Day Scheduler',
            category: 'projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            link: 'https://hanielchang.github.io/work-day-scheduler/',
            github: 'https://github.com/hanielchang/work-day-scheduler'
        },
        {
            name: 'Basic Weather Search',
            category: 'projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            link: 'https://hanielchang.github.io/weather-dashboard/',
            github: 'https://github.com/hanielchang/weather-dashboard'
        },
        {
            name: 'First Portfolio',
            category: 'projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
            link: 'https://hanielchang.github.io/personal-portfolio/',
            github: 'https://github.com/hanielchang/personal-portfolio'
        }
        
    ]);

    return (
        <div>
            <div className="flex-row">
                {/* The default property is where the image has been saved. To render the image, the default property must be invoked. */}
                {projects.map((image, index) => (
                    <div className="flex-row">
                        <a href={image.link}>
                            <img
                                src={require(`../../assets/small/${category}/${index}.jpg`).default}
                                alt={image.name}
                                className="img-thumbnail mx-1"
                                key={image.name}
                            />
                        </a>
                        <p>{image.name}: </p>
                        <a data-testid="link" href={image.github}>
                            <span>Github link</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoList;
