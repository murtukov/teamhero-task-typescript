import {CSSProperties} from "react";

export interface IFieldProps {
    source: string,
    styles?: CSSProperties,
    title?:  string | null,
    width?:  string | number
}