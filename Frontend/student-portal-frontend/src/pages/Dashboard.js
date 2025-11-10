import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Button,
  Typography,
  Box,
  Alert,
  Snackbar,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import api from '../services/api';
import StudentCard from '../components/StudentCard';
import StudentFormDialog from '../components/StudentFormDialog';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await api.get('/students');
      setStudents(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch students');
    } finally {
      setLoading(false);
    }
  };

  const handleAddStudent = async (studentData) => {
    try {
      await api.post('/students', studentData);
      setDialogOpen(false);
      fetchStudents();
      showSnackbar('Student added successfully', 'success');
    } catch (err) {
      showSnackbar('Failed to add student', 'error');
    }
  };

  const handleUpdateStudent = async (studentData) => {
    try {
      await api.put(`/students/${selectedStudent.id}`, studentData);
      setDialogOpen(false);
      setSelectedStudent(null);
      fetchStudents();
      showSnackbar('Student updated successfully', 'success');
    } catch (err) {
      showSnackbar('Failed to update student', 'error');
    }
  };

  const handleDeleteStudent = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await api.delete(`/students/${id}`);
        fetchStudents();
        showSnackbar('Student deleted successfully', 'success');
      } catch (err) {
        showSnackbar('Failed to delete student', 'error');
      }
    }
  };

  const handleEditStudent = (student) => {
    setSelectedStudent(student);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedStudent(null);
  };

  const handleFormSubmit = (studentData) => {
    if (selectedStudent) {
      handleUpdateStudent(studentData);
    } else {
      handleAddStudent(studentData);
    }
  };

  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#121212', // dark background as fallback
          backgroundImage: `radial-gradient(circle at center, #00808040, #000000)`, // teal translucent radial gradient
          paddingTop: 4,
          paddingBottom: 4,
        }}
      >
        <Container maxWidth="lg" sx={{ color: '#ffffff' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography
  variant="h4"
  component="h1"
  color="teal"
  sx={{
    fontFamily: "'BebasNeue-book', sans-serif",
  }}
>
  Student Dashboard
</Typography>

            <Button
              variant="contained"
              color="primary"
              startIcon={<Add />}
              onClick={() => setDialogOpen(true)}
            >
              Add Student
            </Button>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {students.length === 0 ? (
            <Typography variant="h6" align="center" color="text.secondary" sx={{ mt: 5 }}>
              No students found. Click "Add Student" to create one.
            </Typography>
          ) : (
            <Grid container spacing={3}>
              {students.map((student) => (
                <Grid item xs={12} sm={6} md={4} key={student.id}>
                  <StudentCard
                    student={student}
                    onEdit={handleEditStudent}
                    onDelete={handleDeleteStudent}
                  />
                </Grid>
              ))}
            </Grid>
          )}

          <StudentFormDialog
            open={dialogOpen}
            onClose={handleDialogClose}
            onSubmit={handleFormSubmit}
            student={selectedStudent}
          />

          <Snackbar
            open={snackbar.open}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
          >
            <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
              {snackbar.message}
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
