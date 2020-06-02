import React, { Suspense, lazy} from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import LoadingIndicator from './components/loading-indicator/LoadingIndicator'
const HomePage = lazy(() => import('./home-page/HomePage'))
const Artist = lazy(() => import('./artist-page/AritstPage'))

const routes = {
  'Home': '/',
  'Artist': '/Artist', 
}


export default function App(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Suspense fallback={<LoadingIndicator isActive={true} />}>
        <Switch>
          <Route exact={true} path={routes.Home} component={HomePage}/>
          <Route exact={true} path={`${routes.Artist}/:artist`} component={Artist}/>
        </Switch>
      </Suspense>
    </ConnectedRouter>
  );
}


