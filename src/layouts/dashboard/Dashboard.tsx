import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { SideNav } from './SideNav';
import AppRouter from '../../router';


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
  width: '100%'
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
        <LayoutContainer>
          <AppRouter>
            {children}
          </AppRouter>
        </LayoutContainer>
      </LayoutRoot>
    </>
  );
});
