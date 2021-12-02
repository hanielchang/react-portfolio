import React, { useState } from 'react';

const PhotoList = ({ category }) => {

    const [photos] = useState([
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
        }
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);


    return (
        <div>
            <div className="flex-row">
                {/* The default property is where the image has been saved. To render the image, the default property must be invoked. */}
                {currentPhotos.map((image, index) => (
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
