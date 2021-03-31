import React from 'react';
import { fireEvent } from '@testing-library/react'
import { renderWithProvider } from "../table/Table.test";
import FilterPanel from "./FilterPanel";
import Table from "../table/Table";
import StringField from "../table/fields/StringField";

function pressEnterWithValue(input: HTMLElement, value: string) {
    fireEvent.keyPress(input, {
        key: "Enter",
        code: 13,
        charCode: 13,
        target: {value}
    });
}

describe('FilterPanel', () => {

    it('renders tags', async () => {
        const {getByTitle, findByPlaceholderText, findByText} = renderWithProvider(
            <FilterPanel column={'skills'}/>,
        );

        fireEvent.click(getByTitle('Add tag'))
        pressEnterWithValue(await findByPlaceholderText('Type and press Enter'), 'Russian');

        fireEvent.click(getByTitle('Add tag'))
        pressEnterWithValue(await findByPlaceholderText('Type and press Enter'), 'English');

        expect(await findByText('Russian')).not.toBe(null);
        expect(await findByText('English')).not.toBe(null);
    });

    it('filters data correctly', async () => {
        const { getByTitle, findByPlaceholderText, getByTestId } = renderWithProvider(
            <>
                <FilterPanel column={'skills'}/>
                <Table>
                    <StringField source='firstName'/>
                </Table>
            </>,
        );

        let tableBody = getByTestId('table-body');

        // Before filtering there are 9 rows
        expect(tableBody.children.length).toBe(9);

        // Enter text into input field and press Enter
        fireEvent.click(getByTitle('Add tag'))
        pressEnterWithValue(await findByPlaceholderText('Type and press Enter'), 'Assassination');

        // After filtering there is only 1 row
        expect(tableBody.children.length).toBe(1);
    });
})