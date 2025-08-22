import { AppBar, Toolbar, Typography } from "@mui/material";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

// Navbar displays the top app bar with profile settings title
function Navbar() {
  return (
    <AppBar sx={{ backgroundColor: '#1976D2' }}>
      <Toolbar sx={{ px: 15 }}>
        {/* Profile icon */}
        <SupervisedUserCircleIcon fontSize ="large" sx={{ margin: 1 }}/>
        {/* App bar title */}
        <Typography variant="h4">userHub</Typography>
        <Typography variant="h4" sx={{ margin: 'auto' }}>Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;