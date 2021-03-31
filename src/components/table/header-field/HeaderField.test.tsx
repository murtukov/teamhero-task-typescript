import React from 'react';
import { fireEvent } from "@testing-library/react";
import { renderWithProvider } from "../Table.test";
import HeaderField from "./HeaderField";

describe('HeaderField', () => {
    it('renders correctly', async () => {
        const { getByTestId, getByText, queryByText } = renderWithProvider(
            <HeaderField source='firstName' data-testid='root'/>
        );

        const header = getByTestId('root');
        const label  = getByText('First Name');

        // Not clicked yet
        expect(label).toHaveStyle({fontWeight: 'normal'});
        expect(header.children).toHaveLength(1);

        // Click first time
        fireEvent.click(header);
        expect(label).toHaveStyle({fontWeight: 'bold'});
        expect(header.children).toHaveLength(2);
        expect(queryByText('▼')).toBeInTheDocument();

        // Click second time
        fireEvent.click(header);
        expect(label).toHaveStyle({fontWeight: 'bold'});
        expect(header.children).toHaveLength(2);
        expect(queryByText('▲')).toBeInTheDocument();

        // Click third time
        fireEvent.click(header);
        expect(label).toHaveStyle({fontWeight: 'normal'});
        expect(header.children).toHaveLength(1);
    });
});