import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
        render(<About />);
    })

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // In this test case, we'll use the asFragment function, which returns a snapshot of the About component. 
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})

// ------------------------Regarding the __snapshots__ folder------------------------
// The index.test.js.snap file is a serialized version of the component's node structure, which includes elements, 
// attributes, and text content. This file, stored in the __snapshots__ folder, will serve as the base model of the 
// component's structure, and will be compared against new snapshots that are created by the asFragment function.