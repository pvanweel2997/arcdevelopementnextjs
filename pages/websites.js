import React from 'react';
import Link from '../src/Link';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, IconButton, useMediaQuery } from '@material-ui/core';
import CallToAction from '../src/ui/CallToAction';

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  paragraphContainer: {
    maxWidth: '30em',
  },
}));

const Websites = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();

  const matchesMD = useMediaQuery(theme => theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justifyContent={matchesMD ? 'center' : undefined}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        <Grid
          item
          className={classes.arrowContainer}
          style={{
            marginRight: '1em',
            marginLeft: '-3.5em',
            display: matchesMD ? 'none' : 'block',
          }}
        >
          <IconButton
            style={{
              backgroundColor: 'transparent',
            }}
            component={Link}
            href="/mobileapps"
            onClick={e => {
              setSelectedIndex(2);
            }}
          >
            <img
              src="/assets/backArrow.svg"
              alt="Back to iOS/Android App Development Page"
            />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant="h2">
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.arrowContainer}
          style={{ display: matchesMD ? 'none' : 'block' }}
        >
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            href="/services"
            onClick={e => {
              setSelectedIndex(0);
            }}
          >
            <img
              src="/assets/forwardArrow.svg"
              alt="Forward to Services Page"
            />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: '15em' }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/analytics.svg"
                style={{ marginLeft: '-2.75em' }}
                alt="graph with magnifying glass revealing ones and zeroes"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems="center"
        justifyContent="flex-end"
        className={classes.rowContainer}
        style={{ marginBottom: '15em', marginTop: '15em' }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/ecommerce.svg"
                alt="world outline made of dollar signs"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography variant="body1" paragraph>
            It’s no secret that people like to shop online.
          </Typography>
          <Typography variant="body1" paragraph>
            In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src="assets/outreach.svg" alt="megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            Draw people in with a dazzling website. Showing off your products
            online is a great way to help customers decide what’s right for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems="center"
        justifyContent="flex-end"
        className={classes.rowContainer}
        style={{ marginTop: '15em', marginBottom: '15em' }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Search Engine
                <br />
                Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/seo.svg"
                alt="website standing on a winner's podium"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            If you’re like us, probably never
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            Customers don’t go there either, so we make sure your website is
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        {/*---- Call To Action Block ----- */}
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default Websites;
