import React, {useContext} from 'react';
import HeaderField from "./header-field/HeaderField";
import s from './styles.module.css';
import {TableContext} from "./TableProvider";
import {IFieldProps} from "./fields/sharedProps";

interface ITableProps {
    children: React.ReactElement<IFieldProps>[]
}

function Table({children: fields}: ITableProps) {
    const {data} = useContext(TableContext);

    // Create mapping
    const columns = fields.map(({props, type}) => ({
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
        <div className={s.root}>
            <div className={s.headerRow}>
                {columns.map(({builderProps}, i) =>
                    <HeaderField {...builderProps} key={i}/>
                )}
            </div>

            {data.map((row, i) =>
                <div className={s.row} key={i}>
                    {columns.map(({builderProps, type: Field, fieldProps}, j) =>
                        <Field
                            data={row[builderProps.source]}
                            {...fieldProps}
                            key={j}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

export default Table;