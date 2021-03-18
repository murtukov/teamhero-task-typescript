import React, {useContext, useState} from 'react';
import {SORT_ORDER} from "../../../common/constants";
import s from './styles.module.css';
import {TableContext} from "../TableProvider";
import {Order} from "../../../common/types";

const arrows: { ASC: string; DESC: string } = {
    DESC: '▼',
    ASC: '▲'
};

interface IHeaderProps {
    source: string,
    title?: string | null,
    isSortable: boolean
}

function Header({source, title, isSortable = true, ...props}: IHeaderProps) {
    const [sortOrder, updateSortOrder] = useState<Order>("NONE");
    const {setSortOptions} = useContext(TableContext);

    function handleClick() {
        let order: Order;

        if (sortOrder === SORT_ORDER.DESC) {
            order = "DESC";
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
            <span>{title}</span>

            {sortOrder !== "NONE" && (
                <i className={s.arrow}>
                    {arrows[sortOrder]}
                </i>
            )}
        </th>
    );
}

export default Header;