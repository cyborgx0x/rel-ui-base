import * as React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './searchArea.scss';

import OptionsMenu from './OptionMenu';

const style = {
  position: 'absolute' as 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'transparent',
  border: 'none',
  p: 4,
};

interface IProps {
  setValueSearch: React.Dispatch<React.SetStateAction<string>>;
  valueSearch: string;
  handleSearch: () => Promise<void>;
  typeSearch: string;
  isMobile: boolean;
  handleChange: (selected: string) => void;
}

const SearchTextField = ({ setValueSearch, valueSearch, handleSearch, typeSearch, isMobile, handleChange }: IProps) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log('closed');
    setOpen(false);
  };
  console.log(open);

  return (
    <div style={{ width: '80%' }}>
      <Box
        bgcolor={theme.palette.background.default}
        sx={{
          boxShadow: `0px 0.5px 5px ${theme.palette.action.hover}, 0px 0px 5px 5px ${theme.palette.action.hover}`,
          borderRadius: '10px',
          padding: '5px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '13px',
        }}
      >
        <IconButton onClick={handleOpen}>
          <div
            style={{
              color: theme.palette.grey[100],
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ExpandMoreIcon fontSize="small" sx={{ marginRight: '5px' }} />
            {(() => {
              switch (typeSearch) {
                case 'phone:':
                  return 'Phone';
                case 'email:':
                  return 'Email';
                case 'facebook_id:':
                  return 'ID Facebook';
                case 'pii:':
                  return 'PII';
                case 'username:':
                  return 'User Name';
                default:
                  return null;
              }
            })()}{' '}
            <span style={{ fontSize: '28px', marginLeft: '8px', paddingBottom: '5px' }}>|</span>
          </div>
        </IconButton>
        <input
          type="text"
          className="searchInput"
          style={{ background: theme.palette.background.default }}
          placeholder="Enter phone, email, address, and more..."
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValueSearch(event.target.value)}
          value={valueSearch}
        />
        <IconButton
          onClick={async () => {
            handleSearch();
          }}
        >
          <SearchOutlinedIcon sx={{ color: theme.palette.grey[100], fontSize: '30px' }} />
        </IconButton>
        {/* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h1"
              sx={{ textAlign: 'center', marginBottom: '10px' }}
            >
              Choose type of search
            </Typography>
            <OptionsMenu typeSearch={typeSearch} handleChange={handleChange} />
          </Box>
        </Modal> */}
      </Box>
    </div>
  );
};

export default SearchTextField;
