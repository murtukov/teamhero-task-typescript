import React, {MouseEventHandler} from 'react';
import {Icon as BPIcon} from "@blueprintjs/core";
import s from './styles.module.css';

export type IconName = 'link' | 'time' | 'document' | 'flash';

interface IIconProps {
    name:     IconName,
    title?:   string,
    color?:   string,
    onClick?: MouseEventHandler<HTMLSpanElement>
}

function Icon({title, name, color, onClick, ...rest}: IIconProps) {
    return (
        <span
            title={title || mapping[name].title}
            onClick={onClick}
            className={s.root}
            {...rest}
        >
            <BPIcon
                icon={name}
                color={color || mapping[name].color}
            />
        </span>
    );
}

const defaultColor = '#ff6150';

const mapping: { [key in IconName]: {color: string, title: string}} = {
    link: {
        title: "Do something",
        color: '#8d8d8d',
    },
    time: {
        title: "Remind me something...",
        color: defaultColor,
    },
    document: {
        title: "Read this or that...",
        color: defaultColor,
    },
    flash: {
        title: 'Wow! Great idea!',
        color: defaultColor,
    }
};

export default Icon;