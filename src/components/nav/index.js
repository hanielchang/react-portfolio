import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

// so we start by initializing the category state as an array of a few objects. 
// This could be just a regular array, rather than an array inside useState, but 
// we chose to use the useState hook here so that we can have the option to change 
// the categories at some point in the future. It is completely fine to use useState without a setter, 
// but keep in mind that it offers no advantages over just creating a variable within the component.

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected,
        aboutSelected,
        setAboutSelected
    } = props;

    // Notice in the below code block that the first argument is the callback function, 
    // and the second argument is an array with a single element, currentCategory. The second 
    // argument directs the hook to re-render the component on changes to the value of this state. 
    // In other words, if currentCategory changes now, the component will re-render so that the 
    // change in document.title will be visible to the user.
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <span role="img" aria-label="camera">Haniel Chang</span>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setContactSelected(false);
                            setAboutSelected(true);
                        }}> About me</span>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setContactSelected(true);
                            setAboutSelected(false);
                        }}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory.name === category.name && !contactSelected && !aboutSelected && `navActive`}`}
                            key={category.name}
                        >
                            <span onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                                setAboutSelected(false);
                            }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;