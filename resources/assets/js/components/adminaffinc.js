import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import axios from 'axios';
class Adminaffinc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'N° d\'incident', field: 'id' },
        { title: 'N° du Matériel', field: 'id_materiel' },
         {title: 'Type d\'incident',field: 'Type_inc',lookup: { 'Software': 'Software','Hardware': 'Hardware' },},
         { title: 'Description d\'incident', field: 'Des_inc' },
         { title: 'La date d\'incident', field: 'Pk_date' },
         { title: 'Nom de La collaborateur', field: 'nom_coll' }, 	 
         { title: 'Nom de La collaborateur SI', field: 'Nom_collabSI'},
         { title: 'Admin commentaire', field: 'com_SI' },
          { title: 'Date de Traitement', field: 'Date_Traitement' },
           { title: 'Date de reception', field: 'disponible' },
      ],
      materiel: [],
      
    }
  }
  
	    
  componentDidMount(){
        axios.get('/adminaffinc')
        .then(response=>{
           var resdat=Array.from(response.data);
           console.log(response);
            this.setState({materiel:resdat});
        });
    }

  render() {
    return (
      <MaterialTable
        title="Afficher les incidents"
        columns={this.state.columns}
        data={this.state.materiel}

       options={{
          exportButton: true
        }}
      />
    )
  }
}

ReactDOM.render(<Adminaffinc />, document.getElementById('react-inc'));