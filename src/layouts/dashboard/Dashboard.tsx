import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { SideNav } from './SideNav';
import { Header } from './Header'
import Container from '@mui/material/Container';

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH
  }
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh',
});

export const Dashboard = ((props: any) => {
  const { children } = props;
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <SideNav
        onClose={() => setOpenNav(false)}
        open={openNav}
      />
      <LayoutRoot>
        <LayoutContainer sx={{ fontFamily: (theme) => theme.typography.fontFamily, backgroundColor: (theme) => theme.palette.grey[50] }}>
        <Header />
          <Container maxWidth="xl" sx={{ marginTop: 4 }}>
            {children}
          </Container>
        </LayoutContainer>
      </LayoutRoot>
    </>
  );
});
