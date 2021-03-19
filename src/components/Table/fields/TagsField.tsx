import React, {useContext} from 'react';
import {createUseStyles} from "react-jss";
import {IFieldProps} from "./sharedProps";
import {styles as sharedStyles} from "./styles";
import {TableContext} from "../TableProvider";

export interface ITagsFieldProps extends IFieldProps {
    data?: string[]
}

function TagsField({data, source}: ITagsFieldProps) {
    const c = useStyles();
    const {filterOptions, setFilterOptions} = useContext(TableContext);

    function handleClick(tagName: string) {
        setFilterOptions({
            column: source,
            tags: [...filterOptions.tags, tagName]
        })
    }

    if (undefined === data) {
        return null;
    }

    return (
        <td className={c.root}>
            {data.map((tag, i) =>
                <span className={c.tag} onClick={() => handleClick(tag)} key={i}>
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
        marginRight: 7,
        cursor: 'pointer'
    },
});

export default TagsField;