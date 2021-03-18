import React from 'react';
import {createUseStyles} from "react-jss";
import {IFieldProps} from "./types";
import {styles as sharedStyles} from "./styles";

export interface ITagsFieldProps extends IFieldProps {
    data?: string[]
}

function TagsField({data}: ITagsFieldProps) {
    const c = useStyles();

    if (undefined === data) {
        return null;
    }

    return (
        <td className={c.root}>
            {data.map((tag, i) =>
                <span className={c.tag} key={i}>
                    {tag}
                </span>
            )}
        </td>
    );
}

const useStyles = createUseStyles({
    ...sharedStyles,
    tag: {
        backgroundColor: 'rgb(254, 240, 216)',
        padding: 5,
        borderRadius: 5,
        marginRight: 7
    },
});

export default TagsField;