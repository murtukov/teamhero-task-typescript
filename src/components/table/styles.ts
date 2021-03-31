import {createUseStyles} from "react-jss";

const tableBorderRadius = 10;

const useStyles = createUseStyles({
    table: {
        borderCollapse: "collapse",
        fontFamily:     "montserrat, serif",
        color:          "#444F5F",
        overflow:       "hidden",
    },
    tableBody: {
        display: 'table-row-group',

        // Border radius first row
        '& > :first-child': {
            '& > :first-child': {
                borderTopLeftRadius: tableBorderRadius,
            },
            '& > :last-child': {
                borderTopRightRadius: tableBorderRadius
            }
        },

        // Border radius last row
        '& > :last-child': {
            '& > :first-child': {
                borderBottomLeftRadius: tableBorderRadius
            },
            '&  > :last-child': {
                borderBottomRightRadius: tableBorderRadius
            }
        },
    },
    headerRow: {
        display: "table-row",
        height: 48,
    },
    tableRow: {
        display: "table-row",
        borderBottom: [1, 'solid', '#eaeaea'],

        '&:last-child': {
            borderBottom: 'none'
        }
    }
});

export default useStyles;