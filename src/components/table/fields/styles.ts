import {createUseStyles} from "react-jss";
import {CSSProperties} from "react";

export const styles = {
    root: (styles: CSSProperties) => ({
        display: "table-cell",
        textAlign: "left",
        padding: 15,
        verticalAlign: 'middle',
        ...styles
    })
};

const useStyles = createUseStyles(styles);

export default useStyles;