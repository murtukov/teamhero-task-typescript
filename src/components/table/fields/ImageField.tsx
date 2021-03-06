import React from 'react';
import {createUseStyles} from "react-jss";
import {styles as sharedStyles} from "./styles";
import {IFieldProps} from "./sharedProps";

export interface IImageFieldProps extends IFieldProps {
    data?: string,
    shape?: 'circle' | 'rect',
}

function ImageField({data, shape = 'circle'}: IImageFieldProps) {
    const c = useStyles();

    if (undefined === data) {
        return null;
    }

    return (
        <div className={c.cell}>
            <img
                src={data}
                alt='avatar'
                width={35}
                height={35}
                className={c.img}
            />
        </div>
    );
}

const useStyles = createUseStyles({
    ...sharedStyles,
    img: {
        borderRadius: 50
    }
});

export default ImageField;