import { Card, CardContent, Avatar, Button, Typography, Box } from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

function AvatarCard({ previewImage, error, user, handleAvatarChange }) {
  return (
    <Card sx={{ width: "100vh", maxWidth: 350, minHeight: 200, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 7 }}>
          <Avatar src={previewImage} sx={{ width: 150, height: 150, mb: 2 }} />
          {error && <Typography color="error">{error}</Typography>}
          <Typography variant="h4">{user.DisplayName}</Typography>
          <Typography color="text.secondary">{user.userId}</Typography>
        </Box>

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