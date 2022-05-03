import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FC } from 'react';


const Contacts: FC = () => {
    return (
        <section>
            <Paper
                action="/contacts/success"
                component="form"
                data-netlify="true"
                method="post"
                name="contact"
                netlify-honeypot="bot-field"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: 4,
                }}
            >
                <Typography component="h1" sx={{ mb: 4 }} variant="h3">
                    Have a question?<br />Write me.
                </Typography>
                <Box component="label" sx={{ display: 'none' }}>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </Box>
                <TextField
                    fullWidth
                    required
                    label="Name"
                    name="name"
                    sx={{ mb: 4 }}
                    type="text"
                />
                <TextField
                    fullWidth
                    required
                    label="Subject"
                    name="subject"
                    sx={{ mb: 4 }}
                    type="text"
                />
                <TextField
                    fullWidth
                    multiline
                    required
                    label="Message"
                    name="message"
                    rows={5}
                    sx={{ mb: 4 }}
                />
                <TextField
                    fullWidth
                    name="form-name"
                    sx={{ display: 'none' }}
                    value="contact"
                />
                <Button
                    color="primary"
                    type="submit"
                    variant="contained"
                >
                    Send
                </Button>
            </Paper>
        </section>
    );
};

export default Contacts;

