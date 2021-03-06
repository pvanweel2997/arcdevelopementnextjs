import React from 'react';
import Head from 'next/head';
import Link from '../src/Link';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, IconButton, useMediaQuery } from '@material-ui/core';
import documentsAnimation from '../src/animations/documentsAnimation/data.js';
import scaleAnimation from '../src/animations/scaleAnimation/data';
import automationAnimation from '../src/animations/automationAnimation/data.json';
import uxAnimation from '../src/animations/uxAnimation/data';
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
  itemContainer: {
    maxWidth: '40em',
  },
}));

const CustomSoftware = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme => theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme => theme.breakpoints.down('xs'));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const automationsOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Custom Software Development and Design - Free Estimate
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-Edge custom software development with georgeous design from scratch - let us optimize your business, solving problems instead of creating new ones."
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwestg | Custom Software Development"
          key="og:title"
        />
        <meta property="og:url" content="arc.com/customsoftware" key="og:url" />
        <link rel="canonical" key="canonical" href="arc.com/customsoftware" />
      </Head>
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
            href="/services"
            onClick={e => {
              setSelectedIndex(0);
            }}
          >
            <img src="/assets/backArrow.svg" alt="Back to Services Page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant="h1"
              style={{
                lineHeight: matchesXS ? 1.1 : null,
                marginBottom: matchesXS ? '0.5em' : null,
                fontSize: matchesXS ? '2.25em' : null,
              }}
            >
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Whether we???re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Using regular commercial software leaves you with a lot of stuff
              you don???t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant="body1"
              paragraph
            >
              We create exactly what you what, exactly how you want it.
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
            href="/mobileapps"
            onClick={e => {
              setSelectedIndex(2);
            }}
          >
            <img
              src="/assets/forwardArrow.svg"
              alt="Forward to iOS/Android App Development Page"
            />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        style={{ marginTop: '15em', marginBottom: '20em' }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/bulb.svg" alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: '40em',
            marginTop: matchesSM ? '10em' : 0,
            marginBottom: matchesSM ? '10em' : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/stopwatch.svg" alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/cash.svg" alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justifyContent={matchesMD ? 'center' : 'space-between'}
        className={classes.rowContainer}
        style={{ display: matchesMD ? 'grid' : undefined }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? 'center' : undefined}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md style={{ marginTop: matchesSM ? '2em' : null }}>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          md
        >
          <Grid item md style={{ marginBottom: matchesSM ? '2em' : null }}>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? 'center' : 'right'}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? 'center' : 'right'}
                paragraph
              >
                Whether you???re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ marginTop: '20em', marginBottom: '20em' }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src="/assets/roots.svg"
              alt="tree with roots extending out"
              height={matchesSM ? '300em' : '450em'}
              width={matchesSM ? '300em' : '450em'}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" gutterBottom align="center">
              Root-Cause Analysis
            </Typography>
            <Typography varian="body1" align="center" paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography varian="body1" align="center" paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justifyContent={matchesMD ? 'center' : 'space-between'}
        style={{
          marginBottom: '20em',
          display: matchesMD ? 'grid' : undefined,
        }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
          direction={matchesSM ? 'column' : 'row'}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesSM ? 'center' : undefined} variant="h4">
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align={matchesSM ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                Why waste time when you don???t have to?
              </Typography>
              <Typography
                align={matchesSM ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated
              </Typography>
              <Typography
                align={matchesSM ? 'center' : undefined}
                variant="body1"
                paragraph
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md style={{ marginTop: matchesSM ? '2em' : null }}>
            <Lottie
              options={automationsOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          md
        >
          <Grid item md style={{ marginBottom: matchesSM ? '2em' : null }}>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? 'center' : 'right'}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? 'center' : 'right'}
                paragraph
              >
                A good design that isn???t usable isn???t a good design.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? 'center' : 'right'}
                paragraph
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? 'center' : 'right'}
                paragraph
              >
                By prioritizing users and the real ways they interact with
                technology we???re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
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

export default CustomSoftware;
