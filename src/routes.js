import React from 'react';
import { Route } from 'mobx-router';

// Pages
import Campaign from './components/Campaign';

export default {
  home: new Route({
    path: '/',
    component: <h1>Hello World</h1>,
  }),
  campaign: new Route({
    path: '/campaign',
    component: <Campaign />,
  }),
}
