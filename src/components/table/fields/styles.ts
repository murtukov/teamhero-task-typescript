import { createUseStyles } from "react-jss";
import { CSSProperties } from "react";

export const styles = {
    cell: (styles: CSSProperties) => ({
        backgroundColor: 'white',
        display: "table-cell",
        textAlign: "left",
        padding: 15,
        verticalAlign: 'middle',
        ...styles,
    })
};

const useStyles = createUseStyles(styles);

export default useStyles;