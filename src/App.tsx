import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PersonalDataForm from './pages/PersonalDataForm';
import { Container, Box, CssBaseline, Link } from '@mui/material';
import { styled } from '@mui/system';

const MainContent = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  padding: theme.spacing(2),
  background: 'white',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(1, 0),
    padding: theme.spacing(1),
  },
}));

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box className="header" component="header" display={"flex"}>
        <Link href='https://www.gov.co/'>
          <img style={{ height: "25px" }} src="https://css.mintic.gov.co/mt/mintic/img/header_govco.png" alt="" />
        </Link>
      </Box>
      <Container className="main-content">
        <Box component={"div"} sx={{textAlign: "center"}}>
          <img style={{ width: "90%", objectFit: "contain"}} src="https://siaweb.itm.edu.co/BANNER-EN-LA-U-NOS-ENCTROMAS.png" alt="" />
        </Box>
        <MainContent>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/personal-data" element={<PersonalDataForm />} />
            </Routes>
          </BrowserRouter>
        </MainContent>
      </Container>
    </>
  );
}

export default App;
