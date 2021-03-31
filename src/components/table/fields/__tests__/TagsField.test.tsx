import React from "react";
import {render} from "@testing-library/react";
import TagsField from "../TagsField";

const tags = ['One', 'Two', 'Three'];

describe('TagsField component', () => {
    it('matches snapshot', () => {
        const { container } = render(<TagsField source='dummy' data={tags}/>);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('contains correct amount of tags', () => {
        const { container, queryByText } = render(<TagsField source='dummy' data={tags}/>);

        expect(container.firstChild!.childNodes.length).toBe(3);
        expect(queryByText('One')).toBeInTheDocument();
        expect(queryByText('Two')).toBeInTheDocument();
        expect(queryByText('Three')).toBeInTheDocument();
    });
})