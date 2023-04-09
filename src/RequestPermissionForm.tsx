// RequestPermissionForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const RequestPermissionForm: React.FC = () => {

    interface PermissionRequestBody {
        employeeFirstName: string;
        employeeLastName: string;
        permissionTypeId: number;
      }
  const [employeeFirstName, setEmployeeFirstName] = useState<string>('');
  const [employeeLastName, setEmployeeLastName] = useState<string>('');
  const [permissionTypeId, setPermissionTypeId] = useState<number>(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestBody: PermissionRequestBody = {
      employeeFirstName,
      employeeLastName,
      permissionTypeId,
    };

    try {
      const response = await axios.post('/Permissions/RequestPermission', requestBody);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <Container maxWidth="sm">
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Request Permission
      </Typography>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Employee First Name"
            value={employeeFirstName}
            onChange={(e) => setEmployeeFirstName(e.target.value)}
            required
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Employee Last Name"
            value={employeeLastName}
            onChange={(e) => setEmployeeLastName(e.target.value)}
            required
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            type="number"
            label="Permission Type ID"
            value={permissionTypeId}
            onChange={(e) => setPermissionTypeId(parseInt(e.target.value))}
            required
          />
        </Box>
        <Button variant="contained" startIcon={<SaveIcon />} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  </Container>
    
  );
};
export {};

export default RequestPermissionForm;
