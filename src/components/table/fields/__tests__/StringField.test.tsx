import React from "react";
import { render } from "@testing-library/react";
import StringField from "../StringField";

const text = 'This is a string';

describe('StringField component', () => {
    it('renders correctly', () => {
        const { container: {firstElementChild} } = render(<StringField source='dummy' data={text} />)
        expect((firstElementChild as Element).textContent).toBe(text)
    });

    it('has correct fontWeight style', () => {
        const { container } = render(<StringField source='dummy' bold />)
        expect(window.getComputedStyle(container.firstElementChild as Element).fontWeight).toBe('bold');
    });
})

