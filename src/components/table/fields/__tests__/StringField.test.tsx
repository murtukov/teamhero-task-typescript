import React from "react";
import { render } from "@testing-library/react";
import StringField from "../StringField";

const text = 'This is a test string';

describe('StringField component', () => {
    it('matches snapshot', () => {
        const { container } = render(<StringField source='dummy' data={text} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders correct fontWeight style', () => {
        const { container } = render(
            <StringField source='dummy' bold />
        );

        expect(container.firstElementChild).toHaveStyle({fontWeight: 'bold'});
    });
})

