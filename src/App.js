// This App.js file is the center of the application. Think of App.js as the root component, 
// or the wrapper component that houses all of the other components. To effect any change on 
// the application, we need to either modify this file or add components inside it.

import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';


// To allow for Gallery to be a child of Nav, we "lift" the state by adding 3 things:
// First, declare categories using the useState.
// Then, set currentCategory with its setter using useState.
// Finally, edit the nav componenent to have the variables as shown
function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // The line below allows us to condition what renders based on which menu item the user selects from the navigation bar.
  const [contactSelected, setContactSelected] = useState(false);

  // To pass Props to child elements, the declarations go INSIDE the opening tag of the component
  // It's almost like making a function call. When you make a call, you pass parameters. That's 
  // what happens when you declare Props inside an opening tag, such as what's inside the <Nav> opener.
  return (
    <div>
      {/* Passing the getter and setter functions into the Nav component will allow the components
      to modify their states in the App component, which will conditionally render based on the user's selection. */}
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;


