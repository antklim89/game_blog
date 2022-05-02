import { createTheme } from '@mui/material';
import { deepPurple, amber, blueGrey } from '@mui/material/colors';


const { 900: primaryColor } = deepPurple;
const { 50: background } = blueGrey;
const { 900: secondary } = amber;


export const theme = createTheme({
    palette: {
        primary: { main: primaryColor },
        secondary: { main: secondary },
        background: { default: background },
    },
    typography: {
        h1: { color: primaryColor },
        h2: { color: primaryColor },
        h3: { color: primaryColor },
        h4: { color: primaryColor },
    },
});
