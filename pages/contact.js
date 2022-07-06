import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

// import axios from '../axios-configure';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Grid,
  Typography,
  useMediaQuery,
  TextField,
  Button,
  Dialog,
  DialogContent,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';

import ButtonArrow from '../src/ui/ButtonArrow';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url('/assets/background.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url('/assets/mobileBackground.jpg')`,
    },
  },

  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 80,
    width: 205,
    marginRight: '5em',
    marginLeft: '2em',
    fontSize: '1.5rem',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7em',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5em',
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 225,
    },
  },
}));

const Contact = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });

  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const onChange = e => {
    let valid;

    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        setEmailHelper(valid ? '' : 'Invalid Email');

        break;

      case 'phone':
        setPhone(e.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );

        setPhoneHelper(valid ? '' : 'Invalid Phone Number');

        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);
    axios
      .get('http://www.localhost:3001/sendMail', {
        params: {
          name,
          email,
          phone,
          message,
        },
      })
      .then(res => {
        console.log(res);
        setOpen(false);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setAlert({
          open: true,
          message: 'Message sent successfully',
          backgroundColor: '#4BB543',
        });
      })
      .catch(err => {
        console.log('the error: ' + err);
        setAlert({
          open: true,
          message: 'Something went wrong, please try again.',
          backgroundColor: '#FF3232',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const buttonContents = (
    <>
      Send Message
      <img
        src="/assets/send.svg"
        alt="paper airplane"
        style={{ marginLeft: '1em' }}
      />
    </>
  );

  return (
    <Grid container direction="row">
      <Head>
        <title key="title">Contact Us | Arc Development</title>
      </Head>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          marginBottom: matchesMD ? '5em' : 0,
          marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant="h2"
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                vaiant="body1"
                align={matchesMD ? 'center' : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: '2em' }}>
              <Grid item>
                <img
                  src="/assets/phone.svg"
                  alt="phone"
                  style={{ marginRight: '0.5em' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.blue,
                    fontSize: '1rem',
                  }}
                >
                  <a
                    href="tel:5555555555"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    555-555-5555>
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: '2em' }}>
              <Grid item>
                <img
                  src="/assets/email.svg"
                  alt="envelope"
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.blue,
                    fontSize: '1rem',
                  }}
                >
                  <a
                    href="mailto:test@test.com"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    test@test.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" style={{ width: '20em' }}>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  onChange={onChange}
                  fullWidth
                  id="email"
                  value={email}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  onChange={onChange}
                  fullWidth
                  label="Phone"
                  id="phone"
                  value={phone}
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                />
              </Grid>
            </Grid>
            <Grid item style={{ width: '20em' }}>
              <TextField
                fullWidth
                id="message"
                className={classes.message}
                placeholder="Tell us more about your project"
                InputProps={{ disableUnderline: true }}
                multiline
                rows={10}
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </Grid>
            <Grid
              item
              container
              direction={matchesMD ? 'column' : 'row'}
              justifyContent="center"
              style={{ marginTop: '2em' }}
            >
              <Button
                variant="contained"
                className={classes.sendButton}
                onClick={() => {
                  console.log('onclick1');
                  setOpen(true);
                }}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phone.length === 0 ||
                  email.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? '1em' : '5em',
            paddingBottom: matchesXS ? '1em' : '5em',
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '15em'
              : '25em',
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '15em'
              : '25em',
          },
        }}
        open={open}
        fullScreen={matchesSM}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>

            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label="Name"
                id="name"
                fullWidth
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label="Email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                onChange={onChange}
                fullWidth
                id="email"
                value={email}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                onChange={onChange}
                fullWidth
                label="Phone"
                id="phone"
                value={phone}
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
              />
            </Grid>

            <Grid item style={{ width: matchesSM ? '100% ' : '20em' }}>
              <TextField
                fullWidth
                id="message"
                className={classes.message}
                InputProps={{ disableUnderline: true }}
                multiline
                rows={10}
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? 'column' : 'row'}
            style={{ marginTop: '2em' }}
            alignItems="center"
          >
            <Grid item>
              <Button
                style={{ fontWeight: 300 }}
                color="primary"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.sendButton}
                onClick={onConfirm}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phone.length === 0 ||
                  email.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />

      <Grid
        item
        container
        className={classes.background}
        justifyContent={matchesMD ? 'center' : undefined}
        lg={8}
        xl={9}
        alignItems="center"
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            textAlign: matchesMD ? 'center' : 'inherit',
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? 'center' : undefined} variant="h2">
                Simple Software.
                <br />
                Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMD ? 'center' : undefined}
                style={{ fontsize: '1.5rem' }}
              >
                Take advantage of the 21st Century.
              </Typography>
              <Grid container justifyContent={matchesMD ? 'center' : undefined}>
                <Button
                  component={Link}
                  href="/revolution"
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={e => {
                    setValue(2);
                  }}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  ></ButtonArrow>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            href="/estimate"
            variant="contained"
            className={classes.estimateButton}
            onClick={e => {
              setValue(0);
            }}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
