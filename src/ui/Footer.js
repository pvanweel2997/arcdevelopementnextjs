import React from 'react';
import Link from '../Link';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('md')]: {
      height: '3em',
      width: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      width: '2.5em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}));

const Footer = ({ selectedIndex, setSelectedIndex, value, setValue }) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container className={classes.mainContainer} justifyContent="center">
        <Grid item className={classes.gridItem}>
          <Grid container direction="column">
            <Grid
              item
              className={classes.link}
              component={Link}
              href="/"
              onClick={() => {
                setValue(0);
              }}
            >
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              href="/services"
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
            >
              Services
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              href="/customsoftware"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              Custom Software Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              href="/mobileapps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              iOS/Android App Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              href="/websites"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              Website Development
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              href="/revolution"
              onClick={() => {
                setValue(2);
              }}
            >
              The Revoluation
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              href="/revolution"
              onClick={() => {
                setValue(2);
              }}
            >
              Vision
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              href="/revolution"
              onClick={() => {
                setValue(2);
              }}
            >
              Technology
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              href="/revolution"
              onClick={() => {
                setValue(2);
              }}
            >
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              href="/about"
              onClick={() => {
                setValue(3);
              }}
            >
              About Us
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              href="/about"
              onClick={() => {
                setValue(3);
              }}
            >
              History
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              href="/about"
              onClick={() => {
                setValue(3);
              }}
            >
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              href="/"
              onClick={() => {
                setValue(4);
              }}
            >
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        alt="black decorative slash"
        src="/assets/footerAdornment.svg"
        className={classes.adornment}
      />
      <Grid container className={classes.socialContainer} spacing={2}>
        <Grid
          item
          component={'a'}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="facebook logo"
            src="/assets/facebook.svg"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={'a'}
          href="http:/www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="twitter logo"
            src="/assets/twitter.svg"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={'a'}
          href="http:/www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="instagram logo"
            src={'/assets/instagram.svg'}
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
