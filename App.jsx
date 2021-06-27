import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BackPanelUserList from './src/IT19167992/Component/Back-Panel-Users/back-panel-user-list';
import EditBackPanelUser from './src/IT19167992/Component/Back-Panel-Users/edit-back-panel-user';
import AddAgenda from './src/IT19167992/Component/Agenda/add-agenda';
import EditAgenda from './src/IT19167992/Component/Agenda/edit-agenda';
import Dashboard from './src/IT19167992/Component/Dashboard/dashboard';


function App() {
        return (
                <div>
                        <Router>
                                <section>
                                        <Switch>
                                                <Route path="/back-panel-user-list" component={BackPanelUserList} />
                                                <Route path="/edit-back-panel-user/:id" component={EditBackPanelUser} />
                                                <Route path = "/add-agenda" component= {AddAgenda}/>
                                                <Route path = "/edit-agenda" component= {EditAgenda}/>
                                                <Route path = "/dashboard" component = {Dashboard}/>
                                        </Switch>
                                </section>
                        </Router>

                </div>
        )
}

export default App