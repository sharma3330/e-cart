import React, { ReactNode } from 'react';
import { Container, Box, Typography } from '@mui/material';
import Header from './header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      {/* Header */}
      <Header/>

      {/* Main Content */}
        <Container>
            <Box>
                {children} {/* The children will represent product cards or listings */}
            </Box>
        </Container>

      {/* Footer */}
      <Box sx={{ padding: 3, backgroundColor: '#222', color: 'white' }}>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;