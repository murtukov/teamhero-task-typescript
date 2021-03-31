import React, {useContext, Children} from 'react';
import HeaderField from "./header-field/HeaderField";
import {TableContext} from "./TableProvider";
import {IFieldProps} from "./fields/sharedProps";
import useStyles from "./styles";

export interface ITableProps {
    children: React.ReactElement<IFieldProps> | React.ReactElement<IFieldProps>[]
}

function Table({children, ...rest}: ITableProps) {
    const c = useStyles();
    const {data} = useContext(TableContext);

    // Create table mapping
    const columns = Children.map(children, ({props, type}) => ({
        builderProps: {
            source: props.source,
            title: props.title,
            width: props.width,
            isSortable: true,
        },
        fieldProps: props,
        type,
    }));

    return (
        <div className={c.table} {...rest}>
            <div className={c.headerRow}>
                {columns.map(({builderProps}, i) =>
                    <HeaderField {...builderProps} key={i}/>
                )}
            </div>

            <div className={c.tableBody} data-testid='table-body'>
                {data.map((row, i) =>
                    <div className={c.tableRow} key={i}>
                        {columns.map(({builderProps, type: Field, fieldProps}, j) =>
                            <Field
                                data={row[builderProps.source as string]}
                                {...fieldProps}
                                key={j}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Table;