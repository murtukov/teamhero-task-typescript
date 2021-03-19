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

        const newTags = [...filterOptions.tags, event.target.value];

        setFilterOptions({column, tags: newTags});
        setShowInput(false);
    }

    function handleDeleteClick(index: number) {
        const newTags = [...filterOptions.tags];
        newTags.splice(index, 1);

        setFilterOptions({...filterOptions, tags: newTags});
    }

    function handleCleanClick() {
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
                {filterOptions.tags.length > 0 &&
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
                {filterOptions.tags.map(tagRenderer)}

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