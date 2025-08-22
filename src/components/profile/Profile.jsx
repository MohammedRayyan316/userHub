import { useState, useId } from "react";
import { Grid, Box } from "@mui/material";
import Navbar from "./Navbar";
import AvatarCard from "./AvatarCard";
import ProfileDetailsForm from "./ProfileDetails";
import "./Profile.css"

// UserProfile is the main profile page layout
function UserProfile({isEdit, currentData, handleModal, handleDataUpdate}) {

  // State for all profile form fields
  const [formData, setFormData] = useState({
    userId: useId(),
    DisplayName: currentData["userName"] ,
    fullName: currentData["fullName"],
    dob: currentData["dob"],
    email: currentData["email"],
    phone: currentData["phone"],
    bio: currentData["bio"]
  });

  // Handler to update any field in formData
  const handleFormDataChange = (field) => (eventOrValue) => {
    const value = eventOrValue?.target ? eventOrValue.target.value : eventOrValue;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F5F5F5"}}>
      {/* Top navigation bar */}
      <Navbar />
      <Grid container spacing={3} sx={{ mt: 8, p: 3 }} alignItems="flex-start">
        {/* Left Box: Avatar and user info */}
        <Grid item xs={12} md={4} lg={3}>
          <AvatarCard displayName={formData.DisplayName} userId={formData.userId} />
        </Grid>
        {/* Right Box: Profile details form */}
        <Grid item xs={12} md={8} lg={9}>
          <ProfileDetailsForm
            formData={formData}
            setFormData={setFormData}
            handleFormDataChange={handleFormDataChange}
            isEdit={isEdit}
            handleModal={handleModal}
            handleDataUpdate={handleDataUpdate}

          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserProfile;