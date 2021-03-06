import React, {CSSProperties} from 'react';
import {IFieldProps} from "./sharedProps";
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
        <div className={classes.cell} style={styles}>
            {data}
        </div>
    );
}

const useStyles = createUseStyles({
    ...sharedStyles
});

export default StringField;