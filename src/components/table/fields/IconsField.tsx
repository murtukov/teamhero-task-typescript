import React from 'react';
import { IFieldProps } from "./sharedProps";
import { styles as sharedStyles } from "./styles";
import { createUseStyles } from "react-jss";

export interface IIconsFieldProps extends IFieldProps {
    data?: any[],
    // The icon rendering callback is defined by users
    renderer: (icon: any, index: number) => JSX.Element
}

function IconsField({data, renderer}: IIconsFieldProps) {
    const c = useStyles();

    if (undefined === data) {
        return null;
    }

    return (
        <div className={c.cell}>
            <span className={c.wrapper}>
                {data.map((icon, i) => renderer(icon, i))}
            </span>
        </div>
    );
}

const useStyles = createUseStyles({
    ...sharedStyles,
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between'
    }
})

export default IconsField;