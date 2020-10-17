import React, { Component } from "react";
import DevelopersService from "../services/developers.service";
import BootstrapTable from 'react-bootstrap-table-next';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import PageHeader from './../components/page-header.component'

import paginationFactory from 'react-bootstrap-table2-paginator';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class DevelopersList extends Component {
  constructor(props) {
    super(props);

    this.getAllDevelopers = this.getAllDevelopers.bind(this);
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.getActionFormat = this.getActionFormat.bind(this);
    
    this.columns = [{
        dataField: 'nome',
        text: 'Nome',
        sort: true
      }, {
        dataField: 'idade',
        text: 'Idade',
        sort: true
      }, {
        dataField: 'sexo',
        text: 'Sexo'
      }, {
        dataField: 'hobby',
        text: 'Hobby'
      }, {
        dataField: 'datanascimento',
        text: 'Data de nascimento',
        sort: true
      }, {
        text: '',
        formatter: this.getActionFormat,
      }];

    this.state = {
      developers: []
    };
  }


  componentDidMount() {
    this.getAllDevelopers();
  }


  async getAllDevelopers() {
    const response = await DevelopersService.getAll()

    console.log(response.data);
    
    response.data.forEach(developer => {
      developer.datanascimento = new Date(developer.datanascimento).toLocaleString().substr(0,10)
      developer.sexo = developer.sexo == 'M' ? 'Masculino' : 'Feminino'
      // console.log(response.data.sexo);
       
    })

    this.setState({developers: response.data})
  }

  create(e){
    e.preventDefault()
    this.props.history.push("/criar")
  }

  async remove(developer){
    await DevelopersService.delete(developer.id)
    this.getAllDevelopers()
  }

  edit(e, developer) {
    e.preventDefault()
    this.props.history.push("/editar/" + developer.id.toString())
  }

  getActionFormat(cell, row) {
    return (
        <div>
            {row && row.id && <Button onClick={e => this.edit(e, row)} className="justify-content-end" variant="outline-dark"><FontAwesomeIcon icon="edit"></FontAwesomeIcon></Button> } &nbsp;
            {row && row.id && <Button onClick={() => this.remove(row)} className="justify-content-end" variant="outline-dark"><FontAwesomeIcon icon="trash"></FontAwesomeIcon></Button>}
        </div>
    );
  }

  render() {
    const { developers } = this.state;
    return (
        <Container>
          <Row className="justify-content-center">
            <PageHeader title="Developers List"></PageHeader>
          </Row>
          <Row className="justify-content-start"> 
              <Button onClick={this.create}> Adicionar <FontAwesomeIcon icon="plus"></FontAwesomeIcon></Button>
          </Row>
          <Row>
            { developers && ( <BootstrapTable bootstrap4 keyField='id' 
                                                        data={ developers } 
                                                        columns={ this.columns }
                                                        bordered={ false } 
                                                        pagination={ paginationFactory() } /> ) }
          </Row>
        </Container>
    )
  }
}