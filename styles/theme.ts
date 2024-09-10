import { createTheme } from '@mui/material';
import { amber, blueGrey, deepPurple } from '@mui/material/colors';


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
    htmlFontSize: 16,
    h1: { fontSize: '4rem' },
    h2: { fontSize: '3.5rem' },
    h3: { fontSize: '3rem' },
  },
});
