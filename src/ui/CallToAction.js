import React from 'react';
import Link from '../Link';
import { Grid, Typography, Button, useMediaQuery } from '@material-ui/core';
import ButtonArrow from './ButtonArrow';
import { makeStyles, useTheme } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7em',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  background: {
    backgroundImage: `url('/assets/background.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url('/assets/mobileBackground.jpg')`,
      backgroundAttachment: 'inherit',
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
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

const CallToAction = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      alignItems="center"
      className={classes.background}
      justifyContent={matchesSM ? 'center' : 'space-between'}
      direction={matchesSM ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontsize: '1.5rem' }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid container justifyContent={matchesSM ? 'center' : undefined}>
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
  );
};

export default CallToAction;
