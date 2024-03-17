import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Box, Typography, Container } from '@material-ui/core';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const url = 'https://oms-server.com';

  const handleSendEmail = async () => {
    try {
      const response = await axios.post(`${url}/api/sendEmail/sendNewEmail`, {
        email,
        subject,
        message,
      });

      if (response.status === 200) {
        setEmail("")
        setSubject("")
        setMessage("")
        alert("Your email was sent successfully!");
      } else {
        alert("An unexpected error occurred. Please try again later.");
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert("An unexpected error occurred. Please try again later. ");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px' }}>Contact</Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendEmail();
        }}
      >
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Subject"
          fullWidth
          margin="normal"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          label="Message"
          fullWidth
          margin="normal"
          multiline
          minRows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Box textAlign='center' marginTop="20px">
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ContactPage;
