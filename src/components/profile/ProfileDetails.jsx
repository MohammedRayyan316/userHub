import { Card, CardContent, Typography, TextField, Button, Alert } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function ProfileDetailsForm({ formData, handleSave, showAlert, alertType, alertMsg, handleDateChange, handleDisplayNameChange, handleNameChange, handleEmailChange }) {
  return (
    <Card sx={{ width: "100vh", maxWidth: 950, minHeight: 200, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>Profile Details</Typography>

        {showAlert && (
          <Alert severity={alertType} sx={{ mb: 2 }}>
            {alertMsg}
          </Alert>
        )}

        <TextField
          label="User Id"
          fullWidth
          margin="normal"
          required
          value={formData.userId}
          defaultValue={formData.userId}
          inputProps={{ readOnly: true }}
          helperText = "User ID is permanent and cannot be changed."
        />

        <TextField
          label="Display Name"
          fullWidth
          margin="normal"
          required
          value={formData.DisplayName}
          onChange={handleDisplayNameChange}
          inputProps={{ 
            minLength: 3,
            maxLength: 20,
            pattern: "[a-zA-Z]"}}
          helperText="Enter your display name"
          />

          <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          required
          value={formData.fullName}
          onChange={handleNameChange}
          inputProps={{ 
            minLength: 3,
            maxLength: 20,
            pattern: "[a-z A-Z]"}}
          helperText="Enter your full name (3-20 characters)"
          />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Date"
            value={formData.dob}
            onChange={handleDateChange}
            slotProps={{
              textField: {
                helperText: 'MM/DD/YYYY',
                variant: 'outlined',
                fullWidth: true,
                required: true,
                margin: 'normal',
              },
            }}
          />
        </LocalizationProvider>

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          required
          value={formData.email}
          onChange={handleEmailChange}
          helperText="Enter your email address"
        />

        <TextField 
        label="Phone" 
        type="number" 
        fullWidth 
        margin="normal"
        value={formData.phone}
        inputProps={{
          maxLength: 10,
          inputMode: "numeric",
          Pattern: "[0-9]"}}
        helperText="(Optional) Enter your Phone Number"
        />


        <TextField 
        label="Bio" 
        fullWidth 
        margin="normal"
        multiline
        rows={4}
        value={formData.bio}
        inputProprs={{ maxLength: 100 }}
        helperText="(Optional) Write a short bio (max 100 characters)"
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3, height: 56, fontSize: 20 }}
          onClick={handleSave}
        >
          SAVE
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProfileDetailsForm;