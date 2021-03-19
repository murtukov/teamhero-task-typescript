import React, {ChangeEvent, KeyboardEvent, useContext, useState} from 'react';
import {Icon} from "@blueprintjs/core";
import s from './styles.module.css';
import {TableContext} from "../Table/TableProvider";

type InputKeyPressEvent = ChangeEvent<HTMLInputElement> & KeyboardEvent;

interface ITagFilterProps {
    column: string
}

function TagFilter({column}: ITagFilterProps) {

    const {filterOptions, setFilterOptions} = useContext(TableContext);
    const [showInput, setShowInput]         = useState<boolean>(false);
    const [tags, setTags]                   = useState<string[]>([]);

    function handleAddClick() {
        setShowInput(true);
    }

    function handleKeyPress(event: InputKeyPressEvent) {
        if(event.key !== 'Enter') {
            return;
        }

        if (event.target.value.length === 0) {
            return;
        }

        const newTags = [...tags, event.target.value];

        // Set tags locally
        setTags(newTags);

        // Set context options
        setFilterOptions({column, tags: newTags});

        // Hide input field
        setShowInput(false);
    }

    function handleDeleteClick(index: number) {
        const newTags = [...tags];
        newTags.splice(index, 1);

        setTags(newTags);
        setFilterOptions({...filterOptions, tags: newTags});
    }

    function handleCleanClick() {
        setTags([]);
        setShowInput(false);
        setFilterOptions({...filterOptions, tags: []});
    }

    const renderInput = () => (
        <span className={s.inputWrapper}>
            <input
                type='text'
                className={s.input}
                onKeyPress={handleKeyPress}
                placeholder='Type and press Enter'
                autoFocus
            />
            <Icon
                icon='cross'
                onClick={() => setShowInput(false)}
            />
        </span>
    );

    const tagRenderer = (text: string, i: number) => (
        <div className={s.tag} key={i}>
            <span>
                <span>{text}</span>
                <Icon
                    icon='delete'
                    className={s.tagDeleteBtn}
                    color='#444F5F'
                    onClick={() => handleDeleteClick(i)}
                />
            </span>
        </div>
    );

    return (
        <div className={s.root}>
            <div className={s.header}>
                <span>Filter by skill</span>
                {tags.length > 0 &&
                    <div onClick={handleCleanClick} title='Remove all tags'>
                        <Icon
                            icon='trash'
                            color='#6a748c'
                            iconSize={13}
                        />
                    </div>
                }
            </div>

            <div className={s.tags}>
                {tags.map(tagRenderer)}

                {showInput
                    ? renderInput()
                    : (
                        <span
                            className={s.addBtn}
                            onClick={handleAddClick}
                            title='Add tag'
                        >
                            <Icon icon="add" color='#F2F4F9'/>
                        </span>
                    )
                }
            </div>
        </div>
    );
}

export default TagFilter;