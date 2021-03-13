import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import axios from 'axios';
class Adminaffmat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'N° du Matériel', field: 'id' },
        { title: 'Type', field: 'typemat', lookup: { 'Imprimante': 'Imprimante','Ordinateur': 'Ordinateur','Pc Portable': 'Pc Portable','Serveur': 'Serveur','Disc Dure': 'Disc Dure' } },
        { title: 'Nom de La collaborateur', field: 'Nom_coll' },
        { title: 'Référence', field: 'Ref' },
        { title: 'Marque', field: 'Marque' },
        { title: 'Prix', field: 'prix' },
        { title: 'Lieu d\'achat', field: 'lieu_ach' },
        { title: 'Date d\'achat', field: 'date_ach' },
        { title: 'Couleur', field: 'couleur' },
        {title: 'Entite',field: 'entite',lookup: { 'RH': 'RH','DSI': 'DSI','Finance': 'Finance','Domaine Export': 'Domaine Export' },},
         { title: 'Resultat', field: 'Resultat' },
      ],
      materiel: [],
      
    }
  }
  
	    
  componentDidMount(){
        axios.get('/adminaffmat')
        .then(response=>{
           var resdat=Array.from(response.data);
           console.log(response);
            this.setState({materiel:resdat});
        });
    }

  render() {
    return (
      <MaterialTable
        title="Afficher les materiels"
        columns={this.state.columns}
        data={this.state.materiel}

       options={{
          exportButton: true
        }}
      />
    )
  }
}

ReactDOM.render(<Adminaffmat />, document.getElementById('react-mat'));