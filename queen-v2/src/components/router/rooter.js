import React, { useContext } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { AppContext } from 'components/app';
import { OrchestratorManager } from 'components/orchestratorManager';
import QueenRedirect from 'components/queenRedirect';
import { READ_ONLY } from 'utils/constants';
import Synchronize from 'components/Synchronize';
import Visualizer from 'components/visualizer';
import { secure } from 'components/auth';

const Rooter = () => {
  console.log('rooter rerender');
  const { standalone } = useContext(AppContext);
  const { pathname } = useLocation();

  return (
    <Switch>
      <Route
        path={`/queen-v2/:${READ_ONLY}?/questionnaire/:idQ/survey-unit/:idSU`}
        component={secure(OrchestratorManager)}
      />
      <Route
        path={`/queen-v2/:${READ_ONLY}?/survey-unit/:idSU`}
        component={secure(QueenRedirect)}
      />
      {!standalone && <Route path="/queen-v2/synchronize" component={secure(Synchronize)} />}
      <Route path="/queen-v2/visualize" component={Visualizer} />
      {!standalone &&
        !pathname.startsWith('/queen-v2/authentication') &&
        pathname.startsWith('/queen') && <Redirect to="/queen-v2/visualize" />}
      {standalone && !pathname.startsWith('/queen-v2/authentication') && (
        <Redirect to="/queen-v2/visualize" />
      )}
    </Switch>
  );
};

export default Rooter;
