import { useState } from "react";
import { Card, CardContent, Avatar, Button, Typography, Box } from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

// AvatarCard displays the user's avatar, display name, and user ID
function AvatarCard({ displayName, userId }) {
  // State for preview image and error message
  const [previewImage, setPreviewImage] = useState("");
  const [error, setError] = useState("");

  // Handles avatar image upload and validation
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

  return (
    <Card sx={{ width: "100vh", maxWidth: 350, minHeight: 200, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 7 }}>
          {/* User avatar image */}
          <Avatar 
            src={previewImage} 
            sx={{ width: 150, height: 150, mb: 2 }} 
          />
          {/* Error message for avatar upload */}
          {error && <Typography color="error">{error}</Typography>}
          {/* Display name and user ID */}
          <Typography variant="h4">{displayName}</Typography>
          <Typography color="text.secondary">{userId}</Typography>
        </Box>

        {/* Upload avatar button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="contained"
            startIcon={<AddAPhotoIcon />}
            component="label"
            sx={{ mb: 3 }}
          >
            Upload Avatar
            <input hidden type="file" accept="image/*" onChange={handleAvatarChange} />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default AvatarCard;