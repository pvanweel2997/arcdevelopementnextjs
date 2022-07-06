import React from 'react';
import Head from 'next/head';
import Lottie from 'react-lottie';
import Link from '../src/Link';

import landingAnimation from '../src/animations/landinganimation/data';

import ButtonArrow from '../src/ui/ButtonArrow';
import CallToAction from '../src/ui/CallToAction.js';

import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Grid,
  Button,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9em',
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7em',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  mainContainer: {
    marginTop: '5em',
    marginRight: 0,
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url('assets/repeatingBackground.svg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottum: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
    },
  },
  infoBackground: {
    backgroundImage: `url('/assets/infoBackground.svg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

const LandingPage = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landingAnimation,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title key="title">
          Custom Software, Mobile Apps, and Websites | Arc Development
        </title>
      </Head>
      <Grid item>
        {/*---- Hero Block ----- */}
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justifyContent="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  className={classes.estimateButton}
                  variant="contained"
                  component={Link}
                  href="/estimate"
                  onClick={e => {
                    setValue(0);
                  }}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  className={classes.learnButtonHero}
                  onClick={e => {
                    setValue(2);
                  }}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  ></ButtonArrow>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*---- Custom Software Block ----- */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete Digital Solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              href="/customsoftware"
              variant="outlined"
              className={classes.learnButton}
              onClick={e => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              ></ButtonArrow>
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="custom software icon"
              src="/assets/customSoftwareIcon.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*---- iOS/Android Block ----- */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesSM ? 'center' : 'flex-end'}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increate Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              component={Link}
              href="/mobileapps"
              variant="outlined"
              className={classes.learnButton}
              onClick={e => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              ></ButtonArrow>
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              alt="mobile phone icon"
              src="/assets/mobileIcon.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*---- website Block ----- */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optomized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              href="/websites"
              variant="outlined"
              className={classes.learnButton}
              onClick={e => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              ></ButtonArrow>
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="website icon"
              src="/assets/websiteIcon.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*---- Revolutin Block ----- */}
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: '100em', marginTop: '12em' }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                    component={Link}
                    href="/revolution"
                    onClick={e => {
                      setValue(2);
                    }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    ></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {/*---- Information Block ----- */}
        <Grid
          container
          style={{ height: '80em' }}
          direction="row"
          alignItems="center"
        >
          <Grid
            item
            container
            direction={matchesXS ? 'column' : 'row'}
            style={{
              textAlign: matchesXS ? 'center' : 'inherit',
            }}
            className={classes.infoBackground}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}
            >
              <Grid
                container
                style={{ marginBottom: matchesXS ? '10em' : 0 }}
                direction="column"
              >
                <Typography variant="h2" style={{ color: 'white' }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    href="/about"
                    variant="outlined"
                    className={classes.learnButton}
                    style={{ color: 'white', borderColor: 'white' }}
                    onClick={e => {
                      setValue(3);
                    }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill="white"
                    ></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                textAlign: matchesXS ? 'center' : 'right',
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: 'white' }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">Say hello!</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    href="/contact"
                    variant="outlined"
                    className={classes.learnButton}
                    style={{ color: 'white', borderColor: 'white' }}
                    onClick={e => {
                      setValue(4);
                    }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill="white"
                    ></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/*---- Call To Action Block ----- */}
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
