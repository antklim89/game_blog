import { createTheme } from '@mui/material';
import { purple, amber } from '@mui/material/colors';


export const theme = createTheme({
    palette: {
        primary: { main: purple[900] },
        secondary: { main: amber[900] },
    },
});
