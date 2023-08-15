import * as React from 'react';

import CheckIcon from '@mui/icons-material/Check';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import { Box, List, ListItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const listOptions = [
  {
    showName: 'Phone',
    value: 'phone:',
  },
  {
    showName: 'Email',
    value: 'email:',
  },
  {
    showName: 'ID Facebook',
    value: 'facebook_id:',
  },
  {
    showName: 'PII',
    value: 'pii:',
  },
  {
    showName: 'User Name',
    value: 'username:',
  },
];
interface IProps {
  handleChange: (selected: string) => void;
  typeSearch: string;
}

const OptionsMenu = ({ handleChange, typeSearch }: IProps) => {
  const theme = useTheme();
  // console.log(typeSearch);
  const useStyles = makeStyles(() => ({
    listItem: {
      margin: 0,
      padding: theme.spacing(2, 0),
      borderRadius: '13px',
      paddingLeft: '10px',
      paddingRight: '10px',
      background: theme.palette.background.default,
      display: 'flex',
      justifyContent: 'space-between',
      // background: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
      '&:hover': {
        background: theme.palette.action.hover,
        fontWeight: 'bold',
        cursor: 'pointer',
      },
    },
    listItemText: {
      color: theme.palette.primary.main,
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Box
        minWidth={256}
        // bgcolor={theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'}
        bgcolor={theme.palette.background.default}
        sx={{
          boxShadow: `0px 0.5px 5px ${theme.palette.action.hover}, 0px 0px 5px 5px ${theme.palette.action.hover}`,
          // border: `1px solid ${theme.palette.grey[600]}`,
          borderRadius: '10px',
          padding: '20px',
          color: theme.palette.grey[600],
        }}
      >
        <List>
          {listOptions.map((option) => {
            return (
              <ListItem key={option.showName} className={classes.listItem} onClick={() => handleChange(option.value)}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {option.showName === 'Phone' ? (
                    <LocalPhoneOutlinedIcon sx={{ paddingRight: '5px' }} fontSize="medium" />
                  ) : (
                    <></>
                  )}
                  {option.showName === 'Email' ? (
                    <EmailOutlinedIcon sx={{ paddingRight: '5px' }} fontSize="medium" />
                  ) : (
                    <></>
                  )}
                  {option.showName === 'ID Facebook' ? (
                    <FacebookOutlinedIcon sx={{ paddingRight: '5px' }} fontSize="medium" />
                  ) : (
                    <></>
                  )}
                  {option.showName === 'PII' ? (
                    <VerifiedUserOutlinedIcon sx={{ paddingRight: '5px' }} fontSize="medium" />
                  ) : (
                    <></>
                  )}
                  {option.showName === 'User Name' ? (
                    <PersonSearchOutlinedIcon sx={{ paddingRight: '5px' }} fontSize="medium" />
                  ) : (
                    <></>
                  )}
                  {option.showName}
                </div>
                {typeSearch === option.value ? <CheckIcon /> : <></>}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </div>
  );
};

export default OptionsMenu;
