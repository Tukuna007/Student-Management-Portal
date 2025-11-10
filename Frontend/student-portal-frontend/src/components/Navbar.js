import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#071818',  // Dark background 
        boxShadow: 'none',
        borderBottom: '1px solid #333'
      }}
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            color: '#ccc',      // Light grey text
            fontWeight: 600,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
          }}
        >
          Student Management Portal
        </Typography>
        {user && (
          <Box>
            <Button 
              color="inherit" 
              onClick={() => navigate('/dashboard')} 
              sx={{ 
                color: '#bbb', 
                textTransform: 'none',
                fontWeight: 500,
                '&:hover': { color: '#38ef7d' } // teal accent on hover
              }}
            >
              Dashboard
            </Button>
            <Button 
              color="inherit" 
              onClick={handleLogout} 
              sx={{ 
                color: '#bbb', 
                textTransform: 'none',
                fontWeight: 500,
                ml: 2,
                '&:hover': { color: '#f44336' } // red on hover
              }}
            >
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
