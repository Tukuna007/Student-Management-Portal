import React, { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  Link,
  Checkbox,
  FormControlLabel,
  InputAdornment,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
// import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse at 50% 50%, #1b2936ff 40%, #012247ff 100%)',
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 4,
          borderRadius: 3,
          background: '#060E18',
          boxShadow: '0px 8px 32px 0px #09111a60',
          minWidth: 350,
          width: '100%',
          maxWidth: 400,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#fff', fontWeight: 600 }}>
          Sign in
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            variant="filled"
            sx={{
              '& .MuiFilledInput-root': {
                backgroundColor: '#222c33',
                color: '#fff',
                borderRadius: 2,
              },
              '& .MuiInputLabel-root': {
                color: '#b2bfcf',
              },
            }}
            // slotProps={{ input: { style: { color: '#fff' } } }}
            InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <EmailIcon sx={{ color: '#3177DE' }} />
      </InputAdornment>
    ),
  }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
            variant="filled"
            sx={{
              '& .MuiFilledInput-root': {
                backgroundColor: '#222c33',
                color: '#fff',
                borderRadius: 2,
              },
              '& .MuiInputLabel-root': {
                color: '#b2bfcf',
              },
            }}
            // slotProps={{ input: { style: { color: '#fff' } } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: '#3177DE' }} />
                </InputAdornment>
              ),
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.remember}
                onChange={handleChange}
                name="remember"
                sx={{ color: '#38ef7d' }}
              />
            }
            label="Remember me"
            sx={{ color: '#b2bfcf', mt: 2 }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              background: 'linear-gradient(90deg,#3177DE,#90B7F0)',
              color: '#254370',
              fontWeight: 700,
              fontSize: '1rem',
              boxShadow: 'none',
            }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Sign in'}
          </Button>
        </form>

        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#b2bfcf' }}>
            Don't have an account?{' '}
            <Link href="/register" underline="hover" sx={{ color: '#3177DE', fontWeight: 600 }}>
              Sign up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
