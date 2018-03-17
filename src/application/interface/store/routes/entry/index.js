/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch, Route } from 'react-router';
/* ------------------------- External Dependencies -------------------------- */
import { Block } from 'atomic'
import SiteEntry from 'layout/entry/Site'
import {
  EthersNetworkConnect,
} from 'containers'

export default () => (
<div>
  <EthersNetworkConnect/>
  <Block z={[300]} >
    <Switch>
      <Route path="/" component={SiteEntry} />
    </Switch>
  </Block>
</div>
);
