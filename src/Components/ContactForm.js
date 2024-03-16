import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { send } from "emailjs-com";
import { init } from "@emailjs/browser";
init("user_EONaXB3iIyWx0LUz92rOh");

export default function ContactForm() {
  const [toSend, setToSend] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_bdgsgng",
      "template_ho3je5j",
      toSend,
      "user_EONaXB3iIyWx0LUz92rOh"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend({ first_name: "", last_name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <div>
      {/* <h1>Contact</h1> */}
      <Grid>
        <Card elevated style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Let's Collaborate!
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              {/* Send me a message and let's get started! */}
            </Typography>
            <form onSubmit={onSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    label="First Name"
                    name="first_name"
                    variant="outlined"
                    value={toSend.first_name}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    name="last_name"
                    variant="outlined"
                    value={toSend.last_name}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    name="email"
                    variant="outlined"
                    value={toSend.email}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    value={toSend.message}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
