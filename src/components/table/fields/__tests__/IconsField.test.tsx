import React from "react";
import { render } from "@testing-library/react";
import IconsField from "../IconsField";

const data = ['cross', 'plus', 'flash'];

function iconRenderer(name: string, i: number) {
    return <span key={i}>{name}</span>;
}

describe('IconsField component', () => {
    it('matches snapshot', () => {
        const { container } = render(<IconsField data={data} renderer={iconRenderer} source=''/>);
        expect(container.firstChild).toMatchSnapshot();
    });
})