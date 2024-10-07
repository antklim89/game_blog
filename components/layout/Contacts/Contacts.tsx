'use client';
import { type FC, type FormEventHandler, useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


const Contacts: FC = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    const body = new FormData(e.target as HTMLFormElement);
    const response = await fetch('/', { method: 'POST', body });

    if (response.ok) setStatus('success');
    else setStatus('error');

    setLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Container component="section">
      <Paper
        component="form"
        name="contact"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 4,
        }}
        onSubmit={handleSubmit}
      >
        <Typography component="h1" sx={{ mb: 4 }} variant="h3">
          Leave a message
        </Typography>

        {status === 'success' && (
          <Alert severity="success" sx={{ mb: '2rem' }}>
            <AlertTitle>Success</AlertTitle>
            Messege sent.
          </Alert>
        )}
        {status === 'error' && (
          <Alert severity="error" sx={{ mb: '2rem' }}>
            <AlertTitle>Error</AlertTitle>
            Unexpected error. Try again later.
          </Alert>
        )}

        <TextField
          fullWidth
          required
          disabled={loading}
          label="Name"
          name="name"
          sx={{ mb: 4 }}
          type="text"
        />
        <TextField
          fullWidth
          required
          disabled={loading}
          label="Subject"
          name="subject"
          sx={{ mb: 4 }}
          type="text"
        />
        <TextField
          fullWidth
          multiline
          required
          disabled={loading}
          label="Message"
          name="message"
          rows={5}
          sx={{ mb: 4 }}
        />

        <Button
          color="primary"
          disabled={loading}
          sx={{ minHeight: 54, position: 'relative' }}
          type="submit"
          variant="contained"
        >
          Send
          {loading ? <CircularProgress color="secondary" sx={{ position: 'absolute' }} /> : null}
        </Button>
      </Paper>
    </Container>
  );
};

export default Contacts;

