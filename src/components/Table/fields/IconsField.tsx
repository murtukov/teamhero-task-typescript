import React from 'react';
import useStyles from "./styles";
import {IFieldProps} from "./types";
import {Icon} from "@blueprintjs/core";
import { IconName } from "@blueprintjs/icons"

export interface IIconsFieldProps extends IFieldProps {
    data?: IconName[]
}

function IconsField({data}: IIconsFieldProps) {
    const c = useStyles();

    if (undefined === data) {
        return null;
    }

    return (
        <td
            className={c.root}
            style={{display: 'flex', justifyContent: 'space-between'}}
        >
            {data.map((entry, i) => <Icon icon={entry} color='#ff6150' key={i}/>)}
        </td>
    );
}

export default IconsField;