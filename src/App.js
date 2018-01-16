import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import FormComponent from './components/FormComponent';
import TableComponent from './components/TableComponent';
import LoaderComponent from './components/LoaderComponent';
import ErrorComponent from './components/ErrorComponent';
import FooterComponent from './components/FooterComponent';


class App extends Component {
  state = {
    sessions: this.props.sessions,
    showTable: false,
    loading: false,
    showError: false
  };

  handleSubmit = (e) => {
      e.preventDefault();
      this.setState({showTable: false, showError: false});
      e.target.elements.btn.setAttribute("disabled", "disabled");
      const btn =  e.target.elements.btn;
      this.setState({loading: true});
      const fromDate = e.target.elements.fromDate.value.trim();
      const toDate = e.target.elements.toDate.value.trim();
      e.persist();
      axios.get(`https://api.appsee.com/sessions?apikey=8ca3c900cc1f436986d846940d8542c8&apisecret=423467cf645cff1288d3a768&fromdate=${fromDate}&todate=${toDate}&page=1`)
          .then( (response) =>  { 
              if(response.data.Sessions.length > 0){ 
                 e.target.elements.btn.removeAttribute("disabled");
                 this.setState({sessions: response.data.Sessions, showTable: true, loading: false});
              } else {
                 this.setState({showError: true, loading: false,});
                 e.target.elements.btn.removeAttribute("disabled");
              }
            }).catch(error => {
                this.setState({showError: true, loading: false,});
                 e.target.elements.btn.removeAttribute("disabled");
            });
  };

  render() {
    return (
      <Grid>
       <FormComponent sessions={this.state.sessions} handleSubmit={this.handleSubmit}/>
       {this.state.loading && <LoaderComponent />}
       {this.state.showError && <ErrorComponent />}
       {this.state.showTable && <TableComponent sessions={this.state.sessions} loading={this.state.loading}/>}
       <FooterComponent />
      </Grid>
    );
  }
}

export default App;
