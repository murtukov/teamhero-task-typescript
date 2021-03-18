import React, {CSSProperties} from 'react';
import {IFieldProps} from "./types";
import {styles as sharedStyles} from "./styles";
import {createUseStyles} from "react-jss";

export interface IStringFieldProps extends IFieldProps {
    data?: string,
    bold?: boolean
}

function StringField({data, bold = false}: IStringFieldProps) {
    const classes = useStyles();
    const styles: CSSProperties = {};

    if (bold) {
        styles.fontWeight = 'bold';
    }

    return (
        <td className={classes.root} style={styles}>
            {data}
        </td>
    );
}

const useStyles = createUseStyles({
    ...sharedStyles
});

export default StringField;