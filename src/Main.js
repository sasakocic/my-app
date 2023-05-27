import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProfileButton } from './ProfileButton';
import { ShoppingList } from './ShoppingList';
import { Counters } from './Counters';
import { Home } from './Home';
import { TermsAndConditions } from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import Imprint from './Imprint';
import Greeting from './Greeting';
import AuthForm from './AuthForm';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/greeting" element={<Greeting name="World" />} />
      <Route path="/profile" element={<ProfileButton />} />
      <Route path="/shopping-list" element={<ShoppingList />} />
      <Route path="/counters" element={<Counters />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/imprint" element={<Imprint />} />
    </Routes>
  );
}

export default Main;
