import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.0, ease: 'easeOut' }
  }
};

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 10, minHeight: '70vh', textAlign: 'center' }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Student Management Portal
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Manage your students, projects, and activities with ease.
        </Typography>
      </motion.div>
    </Container>
  );
};

export default Home;
