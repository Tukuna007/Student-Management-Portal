import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const StudentCard = ({ student, onEdit, onDelete }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#0E203B', color: '#fff' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="div" gutterBottom sx={{ color: 'inherit' }}>
          {student.name}
        </Typography>

        <Typography variant="body2" gutterBottom sx={{ color: 'inherit' }}>
          <strong>Course:</strong> {student.course}
        </Typography>

        <Typography variant="body2" gutterBottom sx={{ color: 'inherit' }}>
          <strong>Email:</strong> {student.email}
        </Typography>

        <Typography variant="body2" sx={{ color: 'inherit' }}>
          <strong>Phone:</strong> {student.phoneNumber}
        </Typography>
      </CardContent>

      <Box sx={{ p: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={() => onEdit(student)} color="primary" sx={{ color: '#80cbc4' }}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => onDelete(student.id)} color="error" sx={{ color: '#ef5350' }}>
          <Delete />
        </IconButton>
      </Box>
    </Card>
  );
};

export default StudentCard;
