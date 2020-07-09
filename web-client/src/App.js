import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Signup from './components/auth/Signup';
import history from './utils/history';
import { AuthProvider } from './utils/useAuth';
import Header from './components/utils/Header';
import AdminWrapper from './components/admin/AdminWrapper';
import AdminRoute from './components/auth/AdminRoute';
import { SocketProvider } from './utils/useSocket';
import { TracksProvider } from './utils/useTracks';
import PonceParticipations from './components/participations/PonceParticipations';
import UserParticipations from './components/participations/UserParticipations';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
    return (
        <Router history={history}>
            <SocketProvider>
                <TracksProvider>
                    <AuthProvider>
                        <Header />
                        <Switch>
                            <Route exact path="/signup" component={Signup} />

                            <Route
                                exact
                                path="/history"
                                component={PonceParticipations}
                            />

                            <PrivateRoute
                                exact
                                path="/my-history"
                                component={UserParticipations}
                            />

                            <AdminRoute
                                path="/admin"
                                component={AdminWrapper}
                            />
                        </Switch>
                    </AuthProvider>
                </TracksProvider>
            </SocketProvider>
        </Router>
    );
}

export default App;
