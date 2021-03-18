import React, { createContext, Dispatch, SetStateAction, ReactNode, useState } from 'react';
import {Order, PlainObject} from "../../common/types";

export const TableContext = createContext<ContextData>({
    // Default values
    data:             [],
    sortOptions:      { column: '', order: 'NONE' },
    filterOptions:    { column: '', tags: [] },
    setFilterOptions: () => {},
    setSortOptions:   () => {}
});

interface ContextData {
    data:             PlainObject[],
    sortOptions:      SortOptions,
    filterOptions:    FilterOptions,
    setFilterOptions: Dispatch<SetStateAction<FilterOptions>>,
    setSortOptions:   Dispatch<SetStateAction<SortOptions>>
}

interface SortOptions {
    column: string,
    order: Order
}

interface FilterOptions {
    column: string,
    tags: string[]
}

interface ITableProviderProps {
    children: ReactNode,
    data: PlainObject[]
}

function TableProvider({data, children}: ITableProviderProps) {
    const [filterOptions, setFilterOptions] = useState<FilterOptions>({tags: [], column: ''});
    const [sortOptions, setSortOptions]     = useState<SortOptions>({order: 'NONE', column: ''});

    let processed = data;

    if (filterOptions.tags.length > 0) {
        processed = filterData(data, filterOptions);
    }

    if ('NONE' !== sortOptions.order) {
        processed = sortData(data, sortOptions);
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
 * Removes objects from array that contain specific tags.
 *
 * @param array   - Array to remove objects from.
 * @param options - List of tags that object must have in order to be removed
 *
 * @return {PlainObject[]}
 */
function filterData(array: PlainObject[], options: FilterOptions) {
    return array.filter((row) => {
        return options.tags.every(v => row[options.column].includes(v))
    });
}

/**
 * Returns a sorted copy of an array.
 *
 * @param data    - input array.
 * @param options - sorting options.
 *
 * @return sorted - sorted copy of source array.
 */
function sortData(data: PlainObject[], options: SortOptions) {
    return [...data].sort((a, b) => {
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