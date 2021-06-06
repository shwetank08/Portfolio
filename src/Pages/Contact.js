import { makeStyles, TextField, Typography, Grid } from "@material-ui/core";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";


const userId = process.env.REACT_APP_USER_ID
const tempId = process.env.REACT_APP_TEMPLATE_ID
const serviceId = process.env.REACT_APP_SERVICE_ID;


const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
  },
  multilineColor: {
    color: "white",
  },
});

const Contact = () => {
  const classes = useStyles();
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      subject: subject,
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        serviceId,
        tempId,
        templateParams,
        userId
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Sent", {
            type: "success",
          });
          setSubject("");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          toast(error, {
            type: "error",
          });
          setSubject("");
          setName("");
          setEmail("");
          setMessage("");
        }
      );
  }

  return (
    <form onSubmit={sendEmail}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <FormControl>
          <Typography
            variant="h3"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              marginBottom: "1rem",
            }}
          >
            Contact Me
          </Typography>

          <TextField
            id="outlined-basic"
            type="text"
            className={classes.root}
            InputProps={{
              className: classes.multilineColor,
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            label="Subject"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "1rem" }}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            type="text"
            className={classes.root}
            InputProps={{
              className: classes.multilineColor,
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            fullWidth
            label="Name"
            required
            variant="outlined"
            fullWidth
            style={{ marginBottom: "1rem" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            type="email"
            className={classes.root}
            InputProps={{
              className: classes.multilineColor,
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            fullWidth
            style={{ marginBottom: "1rem" }}
            label="Email"
            required
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            type="text"
            className={classes.root}
            InputProps={{
              className: classes.multilineColor,
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            fullWidth
            multiline
            rows={5}
            autocomplete="none"
            style={{ marginBottom: "1rem" }}
            label="Message"
            required
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button variant="outlined" type="submit" style={{ color: "white" }}>
            Send
          </Button>
        </FormControl>
      </Grid>
    </form>
  );
};
export default Contact;
