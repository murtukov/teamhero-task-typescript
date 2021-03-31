import React, { createContext, Dispatch, SetStateAction, ReactNode, useState } from 'react';
import {Order, PlainObject} from "../../common/types";

const defaultFilterOptions: IFilterOptions = { tags: [], column: '' };
const defaultSortOptions: ISortOptions     = { order: 'NONE', column: '' };

export const TableContext = createContext<IContextData>({
    // Default values
    data:             [],
    sortOptions:      defaultSortOptions,
    filterOptions:    defaultFilterOptions,
    setFilterOptions: () => {},
    setSortOptions:   () => {}
});

interface IContextData {
    data:             PlainObject[],
    sortOptions:      ISortOptions,
    filterOptions:    IFilterOptions,
    setFilterOptions: Dispatch<SetStateAction<IFilterOptions>>,
    setSortOptions:   Dispatch<SetStateAction<ISortOptions>>
}

interface ISortOptions {
    column: string,
    order:  Order
}

interface IFilterOptions {
    column: string,
    tags:   string[]
}

interface ITableProviderProps {
    children: ReactNode,
    data: PlainObject[]
}

function TableProvider({data, children}: ITableProviderProps) {
    const [filterOptions, setFilterOptions] = useState(defaultFilterOptions);
    const [sortOptions, setSortOptions]     = useState(defaultSortOptions);

    let processed = data;

    if (filterOptions.tags.length > 0) {
        processed = filterData(processed, filterOptions);
    }

    if ('NONE' !== sortOptions.order) {
        processed = sortData(processed, sortOptions);
    }

    return (
        <TableContext.Provider value={{
            data: processed,
            sortOptions,
            filterOptions,
            setFilterOptions,
            setSortOptions
        }}>
            {children}
        </TableContext.Provider>
    );
}

/**
 * Removes objects from input array that contain specific tags.
 */
function filterData(array: PlainObject[], options: IFilterOptions) {
    return array.filter((row) => {
        return options.tags.every(filterTag => {
            for (let tableTag of row[options.column]) {
                if (filterTag.toLowerCase() === tableTag.toLowerCase()) {
                    return true;
                }
            }
            return false;
        })
    });

    // Simpler version if case-sensitive filtering required
    // return array.filter(row => options.tags.every(v => row[options.column].includes(v)));
}

/**
 * Returns a sorted copy of input array.
 */
function sortData(input: PlainObject[], options: ISortOptions) {
    return [...input].sort((a, b) => {

        if (a[options.column] < b[options.column]) {
            return options.order === 'DESC' ? -1 : 1;
        }

        if (a[options.column] > b[options.column]) {
            return options.order === 'DESC' ? 1 : -1;
        }

        return 0;
    });
}

export default TableProvider;