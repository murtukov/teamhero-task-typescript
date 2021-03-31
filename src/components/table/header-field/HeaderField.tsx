import React, {CSSProperties, useContext, useEffect, useState} from 'react';
import { SORT_ORDER } from "../../../common/constants";
import { TableContext } from "../TableProvider";
import { Order } from "../../../common/types";
import { createUseStyles } from "react-jss";
import s from './styles.module.css';

const arrows: { ASC: string; DESC: string } = {
    DESC: '▼',
    ASC: '▲'
};

export interface IHeaderProps {
    isSortable?: boolean,
    source:      string,
    title?:      string | null,
    width?:      string | number
}

function HeaderField({source, title, isSortable = true, ...props}: IHeaderProps) {
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

    function renderTitle() {
        if (null === title) {
            return null;
        }

        if (undefined !== title) {
            return title;
        }

        const result = source.replace( /([A-Z])/g, " $1" );
        return result.charAt(0).toUpperCase() + result.slice(1);
    }

    return (
        <div {...props} onClick={handleClick} className={s.root} style={resolveStyles(props)}>
            <span className={c.title}>
                {renderTitle()}
            </span>

            {sortOrder !== "NONE" && sortOptions.column === source && (
                <i className={s.arrow}>
                    {arrows[sortOrder]}
                </i>
            )}
        </div>
    );
}

const useStyles = createUseStyles({
    title: (sortOrder: Order) => ({
        fontWeight: sortOrder !== "NONE" ? 'bold' : 'normal'
    })
});

function resolveStyles({width}: Partial<IHeaderProps>): CSSProperties {
    const styles: CSSProperties = {};

    if (undefined !== width) {
        styles.width = typeof width === 'string' ? width : width + 'px';
    }

    return styles;
}

export default HeaderField;