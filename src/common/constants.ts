import {Order} from "./types";

export const SORT_ORDER: { [key in Order]: string } = {
    ASC: 'ASC',
    DESC: 'DESC',
    NONE: 'NONE',
}