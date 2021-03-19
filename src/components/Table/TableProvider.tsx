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
    order: Order
}

interface IFilterOptions {
    column: string,
    tags: string[]
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
        processed = filterData(data, filterOptions);
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
 * Removes objects from array that contain specific tags.
 *
 * @param array   - Array to remove objects from.
 * @param options - List of tags that object must have in order to be removed
 *
 * @return {PlainObject[]}
 */
function filterData(array: PlainObject[], options: IFilterOptions) {
    return array.filter((row) => {
        return options.tags.every(filterTag => {
            for (let tag of row[options.column]) {
                if (filterTag.toLowerCase() === tag.toLowerCase()) {
                    return true;
                }
            }
            return false;
        })
    });

    // Simpler version if case-sensitive filtering needed
    /*
     *  return array.filter((row) => {
     *      return options.tags.every(v => row[options.column].includes(v))
     *  });
     */
}

/**
 * Returns a sorted copy of an array.
 *
 * @param data    - input array.
 * @param options - sorting options.
 *
 * @return sorted - sorted copy of source array.
 */
function sortData(data: PlainObject[], options: ISortOptions) {
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