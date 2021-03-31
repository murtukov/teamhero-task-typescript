import React from 'react';
import { render, fireEvent, RenderOptions } from "@testing-library/react";
import TableProvider from "./TableProvider";
import Table from "./Table";
import testData from "../../test-data";
import StringField from "./fields/StringField";
import TagsField from "./fields/TagsField";

/**
 * Custom render function to wrap elements in context provider
 */
export function renderWithProvider(ui: React.ReactElement, options?: RenderOptions) {
    return render(
        <TableProvider data={testData}>
            {ui}
        </TableProvider>,
        options
    );
}

describe('Table component', () => {
    it('has the same amount of rows as input array', () => {
        const {getByTestId} = renderWithProvider(
            <Table>
                <StringField source='firstName'/>
                <StringField source='lastName'/>
            </Table>
        );

        expect(getByTestId('table-body').children).toHaveLength(testData.length);
    });

    it('has the same amount of columns as input array entry', () => {
        const {getByTestId} = renderWithProvider(
            <Table data-testid='table'>
                <StringField source='firstName'/>
                <StringField source='firstName'/>
                <StringField source='firstName'/>
                <StringField source='firstName'/>
                <StringField source='firstName'/>
            </Table>
        );

        const firstRow = getByTestId('table-body').firstElementChild!;

        expect(firstRow.children).toHaveLength(5);
    });

    describe('Filtering and sorting', () => {
        const title    = "First Name";
        const names    = ['Alfred', 'Albert', 'Timur', 'John', 'Timur', 'Mia', 'Martin', 'Barack', 'Dan'];
        const ascNames = ['Albert', 'Alfred', 'Barack', 'Dan', 'John', 'Martin', 'Mia', 'Timur', 'Timur'];

        function mapUIToArray(children: HTMLCollection) {
            return Array.from(children).map((row, i) => {
                return row.firstElementChild!.textContent;
            })
        }

        function getTableParts() {
            const {getByText, getAllByText, getByTestId} = renderWithProvider(
                <Table>
                    <StringField source='firstName' title={title}/>
                    <TagsField source='skills'/>
                </Table>
            );

            const header    = getByText(title);
            const tableBody = getByTestId('table-body');
            const tag       = getAllByText('English')[0];

            return {header, tableBody, tag};
        }

        it('filters rows by tags', () => {
            const {tableBody, tag} = getTableParts();

            // Before filtering there are 9 rows
            expect(tableBody.children).toHaveLength(9);

            // Click on a tag, to filter
            fireEvent.click(tag);

            // After filtering there is only 1 row
            expect(tableBody.children).toHaveLength(3);
        })

        it('sorts rows', async () => {
            const {header, tableBody} = getTableParts();

            // No sorting
            expect(mapUIToArray(tableBody.children)).toEqual(names);

            // Set sorting to ASC (▼)
            fireEvent.click(header);
            expect(mapUIToArray(tableBody.children)).toEqual(ascNames);

            // Set sorting to DESC (▲)
            fireEvent.click(header);
            expect(mapUIToArray(tableBody.children)).toEqual(ascNames.reverse());
        });

        it('sorts & filters', () => {
            const {header, tableBody, tag} = getTableParts();

            // Filter
            fireEvent.click(tag);

            // Set sorting to ASC (▼)
            fireEvent.click(header);
            expect(mapUIToArray(tableBody.children)).toEqual(['Alfred', 'John', 'Timur']);

            // Set sorting to DESC (▲)
            fireEvent.click(header);
            expect(mapUIToArray(tableBody.children)).toEqual(['Alfred', 'John', 'Timur'].reverse());
        });
    })


});