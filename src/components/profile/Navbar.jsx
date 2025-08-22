import { AppBar, Icon, Toolbar, Typography } from "@mui/material";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

function Navbar() {
  return (
    <AppBar sx={{ backgroundColor: '#1976D2' }}>
      <Toolbar sx={{ px: 15 }}>
        <ManageAccountsIcon sx={{ height: 70, width: 35, marginRight: 1 }} />
        <Typography variant="h4">Profile Settings</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;