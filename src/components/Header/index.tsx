import React, { useState } from 'react';

import { AppBar, Box, Toolbar, Button, Stack } from '@mui/material';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/image/ic_logo.png';
import { useCommonInfo } from '../../contexts/Common';

import useInforGmail from '../../Hooks/common/useInforGmail';
import useShowModalLoginGmail from '../../Hooks/common/useShowModalLoginGmail';
import useAuth from '../../Hooks/useAuth';

import { DefaultMenu, MobileMenu } from './Menu';
import { More } from '../Actions';

export const Header = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { setShowModalLoginGmail } = useShowModalLoginGmail();
  const { inforGmail } = useCommonInfo();
  const { setInforGmail } = useInforGmail();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => setMobileMoreAnchorEl(event.currentTarget);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const logoutGmail = () => {
    logout();
    logoutGoogle();
    handleMenuClose();
    setInforGmail({ inforGmail: null });
  };
  const logoutGoogle = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      auth2.signOut().then(() => {
        auth2.disconnect();
        console.log('Logout success');
      });
    }
  };
  const loginLocal = () => {
    handleMenuClose();
    setShowModalLoginGmail({ isShow: true });
  };
  return (
    <>
      <AppBar
        // onClick={() => handleMenuClose()}
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: (theme) => theme.palette.background.default,
          color: (theme) => theme.palette.grey[600],
        }}
      >
        <Toolbar disableGutters variant="dense">
          {/* <Hamburger toggleNavigation={toggleNavigation} /> */}
          {/* <Button
            onClick={() => {
              navigate('');
              window.location.reload();
            }}
          >
            <Box component="img" src={Logo} sx={{ width: 60, height: 48 }} />
          </Button> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
            {/* <ThemeSwitcher /> */}
            {/* <Messages total={15} />
            <Notifications total={20} /> */}
            {/* <UserAccount onClick={handleProfileMenuOpen} /> */}
            {/* <Button
              variant="text"
              style={{ color: 'black', textTransform: 'none' }}
              onClick={() => {
                navigate('/full_search');
              }}
            >
              Search
            </Button>
            <Button variant="text" style={{ color: 'black', textTransform: 'none' }}>
              Massive Investigation
            </Button>
            <Button variant="text" style={{ color: 'black', textTransform: 'none' }}>
              Blog
            </Button>
            <Button variant="text" style={{ color: 'black', textTransform: 'none' }}>
              Tools
            </Button>
            <Button
              variant="text"
              style={{ color: 'black', textTransform: 'none' }}
              onClick={() => {
                navigate('/pricing');
              }}
            >
              Pricing
            </Button> */}
            {/* <Button variant="outlined" style={{ marginRight: 10, marginLeft: 10, textTransform: 'none' }}>
              Log In
            </Button> */}

            {inforGmail ? (
              <Button onClick={handleProfileMenuOpen}>
                <Stack direction="row" spacing={1}>
                  <img
                    src={inforGmail.picture ? inforGmail.picture : Logo}
                    alt="Example"
                    width={30}
                    height={30}
                    style={{ borderRadius: 30 }}
                  />
                  <span
                    style={{
                      color: '#fff',
                      fontSize: 14,
                      fontWeight: 'bold',
                      flex: 1,
                      textTransform: 'none',
                      paddingTop: 2,
                    }}
                  >
                    {inforGmail.name}
                  </span>
                </Stack>
              </Button>
            ) : (
              <Button
                variant="outlined"
                style={{ marginRight: 10, textTransform: 'none' }}
                onClick={() => {
                  setShowModalLoginGmail({ isShow: true });
                }}
              >
                Sign In
                <VpnKeyOutlinedIcon sx={{ marginLeft: '5px' }} />
              </Button>
            )}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <More onClick={handleMobileMenuOpen} />
          </Box>
        </Toolbar>
      </AppBar>
      <MobileMenu
        isMenuOpen={Boolean(mobileMoreAnchorEl)}
        handleMenuOpen={handleMobileMenuOpen}
        handleMenuClose={handleMenuClose}
        anchorEl={mobileMoreAnchorEl}
        handleLogout={logoutGmail}
        handleLoginLocal={loginLocal}
      />
      <DefaultMenu
        isMenuOpen={Boolean(anchorEl)}
        handleMenuClose={handleMenuClose}
        anchorEl={anchorEl}
        handleLogout={logoutGmail}
      />
    </>
  );
};
