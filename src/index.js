import React from 'react';
import {render} from 'react-dom';
import {StripeProvider} from 'react-stripe-elements';

import MyStoreCheckout from './MyStoreCheckout';

const App = () => {
  return (
    <StripeProvider apiKey="pk_test_eLz60JoT4GwMcTJ6HLTLspsP" >
      <MyStoreCheckout />
    </StripeProvider>
  );
};

render(<App />, document.getElementById('root'));