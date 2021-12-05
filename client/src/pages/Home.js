import React from 'react';
import Button from '@mui/material/Button';

import NavTabs from '../components/nav';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

function Home() {
  return (
      <div>
<NavTabs/>
<LoginForm/>
<SignupForm/>
    <h1>HI</h1>
    <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default Home;
