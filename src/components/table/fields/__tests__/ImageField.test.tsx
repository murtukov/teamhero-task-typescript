import React from "react";
import {render} from "@testing-library/react";
import ImageField from "../ImageField";

describe('ImageField component', () => {
    it('matches snapshot', () => {
        const { container } = render(<ImageField data='about:blank' source='' />);
        expect(container.firstChild).toMatchSnapshot();
    });
})