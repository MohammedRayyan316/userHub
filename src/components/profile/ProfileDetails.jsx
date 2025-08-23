import { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Alert } from "@mui/material";

// ProfileDetailsForm handles the user profile form UI and validation
function ProfileDetailsForm({ formData, setFormData, handleFormDataChange, isEdit, handleModal, handleDataUpdate}) {

  // State for field-level error messages
  const [error, setError] = useState({
    userName: '',
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    bio: ''
  });

  // State for alert display
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMsg, setAlertMsg] = useState("");


  function updateData(data) {
    // Use parent state for update, not localStorage directly
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newData = users.map(user =>
      user.userId == data.userId ? { ...user, ...data } : user
    );
    handleDataUpdate(newData); // This will update both state and localStorage in UserList
    handleModal(false); // Close the modal after saving
  }

  // Validate all fields and show errors/alerts
  const handleSave = () => {
    let hasError = false;
    const newError = {
      userName: '',
      fullName: '',
      dob: '',
      email: '',
      phone: '',
      bio: ''
    };

    // Display Name validation
    if (!formData.userName || formData.userName.trim().length < 3) {
      newError.userName = 'User Name is required (min 3 chars)';
      hasError = true;
    }

    // Full Name validation
    if (!formData.fullName || formData.fullName.trim().length < 3) {
      newError.fullName = 'Full Name is required (min 3 chars)';
      hasError = true;
    }

    // DOB validation
    if (!formData.dob) {
      setAlertType('error');
      setAlertMsg('Date of Birth is required.');
      setShowAlert(true);
      setError(newError);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }

    // Email validation
    if (!formData.email) {
      newError.email = 'Email is required';
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newError.email = 'Enter a valid email address';
      hasError = true;
    }

    // Phone validation (optional, but if present, must be 10 digits)
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newError.phone = 'Phone must be 10 digits';
      hasError = true;
    }

    // Bio validation (optional, max 100 chars)
    if (formData.bio && formData.bio.length > 100) {
      newError.bio = 'Bio must be 100 characters or less';
      hasError = true;
    }
    
    setError(newError);
    if (hasError) {
      setAlertType('error');
      setAlertMsg('Please fix the errors in the form.');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }
    setAlertType('success');
    setAlertMsg('Profile saved successfully!');
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
    updateData (formData);
     // Close the modal after saving
  };
  

  return (
    <Card sx={{ width: "100vh", maxWidth: 950, minHeight: 200, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>Profile Details</Typography>

        {/* Show alert if needed */}
        {showAlert && (
          <Alert severity={alertType} sx={{ mb: 2 }}>
            {alertMsg}
          </Alert>
        )}

        {/* User ID (read-only) */}
        <TextField
          label="User Id"
          fullWidth
          margin="normal"
          required
          disabled 
          value={formData.userId}
          inputProps={{ readOnly: true }}
          helperText = "User ID is permanent and cannot be changed."
        />

        {/* User Name field with validation */}
        <TextField
          label="User Name"
          fullWidth
          margin="normal"
          required
          disabled = {!isEdit}
          value={formData.userName}
          onChange={handleFormDataChange('userName')}
          error={!!error.userName}
          inputProps={{ 
            minLength: 3,
            maxLength: 20,
          }}
          helperText={error.userName || "Enter your user name (alphabets only)"}
        />

        {/* Full Name field with validation and only alphabets allowed */}
        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          required
          disabled = {!isEdit}
          value={formData.fullName}
          onChange={e => {
            // Only allow alphabets and spaces
            const onlyLetters = e.target.value.replace(/[^a-zA-Z ]/g, "");
            setFormData((prev) => ({ ...prev, fullName: onlyLetters }));
          }}
          error={!!error.fullName}
          inputProps={{ 
            minLength: 3,
            maxLength: 20,
            pattern: "[a-z A-Z]"}}
          helperText={error.fullName || "Enter your full name (3-20 characters, alphabets only)"}
        />

        {/* Date of Birth with validation */}
        <TextField
        label="Date of Birth"
        fullWidth
        margin="normal"
        required
        disabled = {!isEdit}
        value={formData.dob}
        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
        helperText="Format: MM/DD/YYYY"
        />

        {/* Email field with validation */}
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          required
          disabled = {!isEdit}
          value={formData.email}
          onChange={handleFormDataChange('email')}
          error={!!error.email}
          helperText={error.email || "Enter your email address"}
        />

        {/* Phone field with validation (optional) */}
        <TextField 
          label="Phone" 
          type="number" 
          fullWidth 
          margin="normal"
          disabled = {!isEdit}
          value={formData.phone}
          onChange={handleFormDataChange('phone')}
          error={!!error.phone}
          inputProps={{
            maxLength: 10,
            inputMode: "numeric",
            pattern: "[0-9]"}}
          helperText={error.phone || "(Optional) Enter your Phone Number"}
        />

        {/* Bio field with validation (optional) */}
        <TextField 
          label="Bio" 
          fullWidth 
          margin="normal"
          disabled = {!isEdit}
          multiline
          rows={4}
          value={formData.bio}
          onChange={handleFormDataChange('bio')}
          error={!!error.bio}
          inputProps={{ maxLength: 100 }}
          helperText={error.bio || "(Optional) Write a short bio (max 100 characters)"}
        />

        {/* Save button triggers validation and save */}
        {isEdit && <Button
          variant="contained"
          fullWidth
          disabled = {!isEdit}
          sx={{ mt: 3, height: 56, fontSize: 20 }}
          onClick={handleSave}
        >
          SAVE
        </Button>}
      </CardContent>
    </Card>
  );
}

export default ProfileDetailsForm;