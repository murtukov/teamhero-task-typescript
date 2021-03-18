import {createUseStyles} from "react-jss";
import {CSSProperties} from "react";

export const styles = {
    root: (styles: CSSProperties) => ({
        textAlign: "left",
        padding: 15,
        ...styles
    })
};

const useStyles = createUseStyles(styles);

export default useStyles;