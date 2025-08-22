import { useState } from "react";
import { Grid, Box } from "@mui/material";
import NavigationBar from "./profile/Navbar";
import AvatarCard from "./profile/AvatarCard";
import ProfileDetailsForm from "./ProfileDetails";
import "./Profile.css"

function UserProfile() {
  const [formData, setFormData] = useState({
    userId: "HardCoreCoder",
    DisplayName: "User Name",
    dob: null,
    email: "abcs@gmail.com",
  });
  const [user, setUser] = useState({
    DisplayName: "User Name",
    userId: "HardCoreCoder",
  });
  const [previewImage, setPreviewImage] = useState("");
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMsg, setAlertMsg] = useState("");

  const handleSave = () => {
    if (!formData.userId || !formData.DisplayName || !formData.dob || !formData.email) {
      setAlertType("error");
      setAlertMsg("Please fill in all required fields.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }
    setUser(formData);
    setAlertType("success");
    setAlertMsg("Profile saved successfully!");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); 
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png"];
    if (!validTypes.includes(file.type)) {
      setError("Only JPG, PNG files are allowed.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("File size must be less than 2MB");
    }

    setError("");
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDateChange = (newDate) => {
    setFormData((prev) => ({ ...prev, dob: newDate }));
  };

  const handleDisplayNameChange = (newDisplayName) => {
    setFormData((prev) => ({ ...prev, DisplayName: newDisplayName.target.value }));
  };

  const handleNameChange = (newName) => {
    setFormData((prev) => ({ ...prev, fullName: newName.target.value }));
  };

  const handleEmailChange = (newEmail) => {
    setFormData((prev) => ({ ...prev, email: newEmail.target.value }));
  };


  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F5F5F5"}}>
  <NavigationBar />
      <Grid container spacing={3} sx={{ mt: 8, p: 3 }} alignItems="flex-start">
        {/* Left Box */}
        <Grid item xs={12} md={4} lg={3}>
          <AvatarCard
            previewImage={previewImage}
            error={error}
            user={user}
            handleAvatarChange={handleAvatarChange}
          />
        </Grid>

        {/* Right Box */}
        <Grid item xs={12} md={8} lg={9}>
          <ProfileDetailsForm
            formData={formData}
            setFormData={setFormData}
            handleSave={handleSave}
            showAlert={showAlert}
            alertType={alertType}
            alertMsg={alertMsg}
            handleDateChange={handleDateChange}
            handleDisplayNameChange={handleDisplayNameChange}
            handleNameChange={handleNameChange}
            handleEmailChange={handleEmailChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserProfile;