import React, { useState, useEffect, useMemo } from 'react';
import { makeStyles, useTheme, withTheme } from '@material-ui/styles';
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
  MenuItem,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Grow,
  Paper,
  Popper,
  MenuList,
  ClickAwayListener,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from '@material-ui/core';

import Link from '../Link';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactGA from 'react-ga';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px',
    zIndex: 1302,
  },
  menuItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  expansion: {
    backgroundColor: theme.palette.common.blue,
    '&.Mui-expanded': {
      margin: 0,
      borderBottom: 0,
    },
    '&::before': {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  expansionDetails: {
    padding: 0,
    backgroundColor: theme.palette.primary.light,
  },
  expansionSummary: {
    padding: '0, 24px, 0 , 16px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
    backgroundColor: props =>
      props.value === 1 ? 'rgba(0, 0, 0, 0.14)' : 'inherit',
  },
}));

const Header = props => {
  const { selectedIndex, setSelectedIndex, value, setValue } = props;
  const classes = useStyles(props);
  const theme = useTheme();
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = useMemo(
    () => [
      {
        name: 'Custom Software',
        link: '/customsoftware',
        activeIndex: 1,
        selectedIndex: 0,
      },
      {
        name: 'iOS/Android App Development',
        link: '/mobileapps',
        activeIndex: 1,
        selectedIndex: 1,
      },
      {
        name: 'Website Development',
        link: '/websites',
        activeIndex: 1,
        selectedIndex: 2,
      },
    ],
    []
  );

  const routes = useMemo(
    () => [
      {
        name: 'Home',
        link: '/',
        activeIndex: 0,
      },
      {
        name: 'Services',
        link: '/services',
        activeIndex: 1,
        ariaOwns: anchorEl ? 'simple-menu' : undefined,
        ariaPopup: anchorEl ? true : undefined,
        mouseOver: e => handleClick(e),
      },
      {
        name: 'The Revolution',
        link: '/revolution',
        activeIndex: 2,
      },
      {
        name: 'About Us',
        link: '/about',
        activeIndex: 3,
      },
      {
        name: 'Contact Us',
        link: '/contact',
        activeIndex: 4,
      },
    ],
    [anchorEl]
  );

  const handleMenuItemClick = (e, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
    setValue(1);
    handleClose();
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = e => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const path = typeof window !== 'undefined' ? window.location.pathname : null;

  const activeIndex = () => {
    const found = routes.find(route => route.link === path);
    const menuFound = menuOptions.find(menu => menu.link === path);

    if (menuFound) {
      setValue(1);
      setSelectedIndex(menuFound.selectedIndex);
    } else if (found === undefined) {
      setValue(false);
    } else {
      setValue(found.activeIndex);
    }
  };

  useEffect(() => {
    activeIndex();
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [path]);

  // ReactGA.pageview(window.location.pathname + window.location.search);

  const tabs = (
    <>
      <Tabs
        value={value}
        className={classes.tabContainer}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={index}
            className={classes.tab}
            component={Link}
            href={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            onMouseLeave={e => setOpenMenu(false)}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        href="/estimate"
        onClick={() => {
          setOpenDrawer(false);
          setValue(0);
        }}
      >
        Free Estimate
      </Button>

      <Popper
        open={openMenu}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement="bottom-start"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{
              transformOrigin: placement === 'top left',
            }}
          >
            <Paper classes={{ root: classes.menu }} elevation={0}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  id="simple-menu"
                  onMouseLeave={handleClose}
                  disablePadding
                  autoFocusItem={false}
                  onMouseOver={e => setOpenMenu(true)}
                >
                  {menuOptions.map((option, index) => (
                    <MenuItem
                      key={index}
                      component={Link}
                      href={option.link}
                      className={classes.menuItem}
                      onClick={e => {
                        handleMenuItemClick(e, index);
                      }}
                      selected={
                        index === selectedIndex &&
                        value === 1 &&
                        window.location.pathname !== 'services'
                      }
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        keepMounted
        style={{ zIndex: 1302 }}
      ></Menu> */}
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        onOpen={() => {
          setOpenDrawer(true);
        }}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map(route =>
            route.name === 'Services' ? (
              <Accordion
                key={route.name}
                classes={{ root: classes.expansion }}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                  classes={{ root: classes.expansionSummary }}
                >
                  <ListItemText
                    className={classes.drawerItem}
                    disableTypography
                    style={{ opacity: value === 1 ? 1 : null }}
                    onClick={() => {
                      setOpenDrawer(false);
                      setValue(route.activeIndex);
                    }}
                  >
                    <Link href={route.link} color="inherit">
                      {route.name}
                    </Link>
                  </ListItemText>
                </AccordionSummary>
                <AccordionDetails classes={{ root: classes.expansionDetails }}>
                  <Grid container direction="column">
                    {menuOptions.map(route => (
                      <Grid item key={`${route}${route.selectedIndex}`}>
                        <ListItem
                          // className={index === 5 ? classes.drawerItemEstimate : undefined}
                          classes={{
                            selected: classes.drawerItemSelected,
                          }}
                          divider
                          button
                          component={Link}
                          href={route.link}
                          onClick={() => {
                            setSelectedIndex(route.selectedIndex);
                            setOpenDrawer(false);
                            // setValue(route.selectedIndex);
                          }}
                          selected={
                            selectedIndex === route.selectedIndex &&
                            value === 1 &&
                            window.location.pathname !== '/services'
                          }
                          // classes={{ selected: classes.drawerItemSelected }}
                        >
                          <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                          >
                            {route.name
                              .split(' ')
                              .filter(word => word !== 'Development')
                              .join(' ')}
                            <br />
                            <span style={{ fontSize: '0.75rem' }}>
                              Development
                            </span>
                          </ListItemText>
                        </ListItem>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ) : (
              <ListItem
                key={route.name}
                // className={index === 5 ? classes.drawerItemEstimate : undefined}
                divider
                button
                component={Link}
                href={route.link}
                onClick={() => {
                  setOpenDrawer(false);
                  setValue(route.activeIndex);
                }}
                selected={value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
              >
                <ListItemText className={classes.drawerItem} disableTypography>
                  {route.name}
                </ListItemText>
              </ListItem>
            )
          )}
          <ListItem
            divider
            button
            component={Link}
            href="/estimate"
            selected={value === 5}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              href="/"
              disableRipple={true}
              className={classes.logoContainer}
              onClick={() => {
                setValue(0);
              }}
            >
              <img
                alt="company logo"
                className={classes.logo}
                src="/assets/logo.svg"
              />
            </Button>
            <Hidden mdDown>{tabs}</Hidden>
            <Hidden lgUp>{drawer}</Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
