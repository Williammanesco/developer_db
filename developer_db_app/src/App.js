import React, { Component } from 'react';
import { Route, BrowserRouter} from "react-router-dom";

import DevelopersList from "./pages/developers-list.page"
import DevelopersCreate from "./pages/developers-create.page"
import DevelopersEdit from "./pages/developers-edit.page"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';


library.add(faPlus, faEdit, faTrash)

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Route exact path="/" component={DevelopersList} />
          <Route exact path="/criar" component={DevelopersCreate} />
          <Route exact path="/editar/:id" component={DevelopersEdit} />
        </BrowserRouter>
    );
  }
}

export default App;
