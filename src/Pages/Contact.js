import React from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import ContactForm from '../Components/ContactForm'

export default function Contact() {
  return (
    <div className="page-content">
      <h1 className="page-title">CONTACT</h1>
      <div className="contact-form">
      <ContactForm />
      </div>
    </div>
  );
}
