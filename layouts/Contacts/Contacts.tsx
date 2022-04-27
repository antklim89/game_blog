import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FC } from 'react';


const Contacts: FC = () => {
    return (
        <section>
            <Typography component="h1" sx={{ mb: 4 }} variant="h3">
                Have a question?<br />Write me.
            </Typography>
            <Box
                action="/contacts/success"
                component="form"
                data-netlify="true"
                method="post"
                name="contact"
                netlify-honeypot="bot-field"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box component="label" sx={{ display: 'none' }}>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </Box>
                <TextField
                    fullWidth
                    name="name"
                    placeholder="Your name"
                    sx={{ mb: 4 }}
                    type="text"
                />
                <TextField
                    fullWidth
                    name="subject"
                    placeholder="Your subject"
                    sx={{ mb: 4 }}
                    type="text"
                />
                <TextField
                    fullWidth
                    multiline
                    name="message"
                    placeholder="Your message"
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
            </Box>
        </section>
    );
};

export default Contacts;

