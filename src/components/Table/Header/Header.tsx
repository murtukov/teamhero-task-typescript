import React, { useContext, useEffect, useState } from 'react';
import { SORT_ORDER } from "../../../common/constants";
import { TableContext } from "../TableProvider";
import { Order } from "../../../common/types";
import s from './styles.module.css';
import {createUseStyles} from "react-jss";

const arrows: { ASC: string; DESC: string } = {
    DESC: '▼',
    ASC: '▲'
};

interface IHeaderProps {
    isSortable: boolean,
    source:     string,
    title?:     string | null,
    width?:     string | number
}

function Header({source, title, isSortable = true, ...props}: IHeaderProps) {
    const [sortOrder, updateSortOrder]  = useState<Order>("NONE");
    const {sortOptions, setSortOptions} = useContext(TableContext);

    const c = useStyles(sortOrder);

    useEffect(() => {
        // Reset sort order on this column, if
        // another column is currently sorting
        if (source !== sortOptions.column) {
            updateSortOrder("NONE");
        }
    }, [source, sortOptions.column])

    function handleClick() {
        let order: Order;

        if (sortOrder === SORT_ORDER.DESC) {
            order = "ASC";
        } else if (sortOrder === SORT_ORDER.ASC) {
            order = "NONE";
        } else {
            order = "DESC"
        }

        // Update local state
        updateSortOrder(order);

        // Update context state
        setSortOptions({order, column: source});
    }

    return (
        <th {...props} onClick={handleClick} className={s.root}>
            <span className={c.title}>
                {title}
            </span>

            {sortOrder !== "NONE" && sortOptions.column === source && (
                <i className={s.arrow}>
                    {arrows[sortOrder]}
                </i>
            )}
        </th>
    );
}

const useStyles = createUseStyles({
    title: (sortOrder: Order) => ({
        fontWeight: sortOrder !== "NONE" ? 'bold' : 'normal'
    })
});

export default Header;