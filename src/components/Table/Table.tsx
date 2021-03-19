import React, {useContext} from 'react';
import Header from "./Header/Header";
import s from './styles.module.css';
import {TableContext} from "./TableProvider";
import {IFieldProps} from "./fields/sharedProps";

interface TableProps {
    children: React.ReactElement<IFieldProps>[]
}

function Table({children: fields}: TableProps) {
    const {data} = useContext(TableContext);

    // Create mapping
    const columns = fields.map(({props, type}) => ({
        builderProps: {
            source: props.source,
            title: props.title,
            isSortable: true,
        },
        fieldProps: props,
        type,
    }));

    return (
        <table className={s.root}>
            <thead>
            <tr>
                {columns.map(({builderProps}, i) =>
                    <Header {...builderProps} key={i}/>
                )}
            </tr>
            </thead>
            <tbody>
                {data.map((row, i) =>
                    <tr className={s.row} key={i}>
                        {columns.map(({builderProps, type: Field, fieldProps}, j) =>
                            <Field
                                data={row[builderProps.source]}
                                {...fieldProps}
                                key={j}
                            />
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Table;