import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import axios from 'axios';
class Updatema extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'N° du Matériel', field: 'id_materiel' },
         { title: 'N° d\'incident', field: 'id' },
        { title: 'Type', field: 'typemat', lookup: { 'Imprimante': 'Imprimante','Ordinateur': 'Ordinateur','Pc Portable': 'Pc Portable','Serveur': 'Serveur','Disc Dure': 'Disc Dure' } },
        { title: 'Nom de La collaborateur', field: 'Nom_coll' },
        { title: 'Référence', field: 'Ref' },
        { title: 'Marque', field: 'Marque' },
        { title: 'Prix', field: 'prix' },
        { title: 'Lieu d\'achat', field: 'lieu_ach' },
        { title: 'Date d\'achat', field: 'date_ach' },
        { title: 'Couleur', field: 'couleur' },
        {title: 'Entite',field: 'entite',lookup: { 'RH': 'RH','DSI': 'DSI','Finance': 'Finance','Domaine Export': 'Domaine Export' },},
        {title: 'Type d\'incident',field: 'type_inc',lookup: { 'Software': 'Software','Hardware': 'Hardware' },},
         { title: 'La date d\'incident', field: 'Pk_date' },
         { title: 'Description d\'incident', field: 'Des_inc' },
      ],
      materiel: [],
      oldData: [],
      newData: [],
      index: ''
    }
  }
  
	    
  componentDidMount(){
        axios.get('/updatema')
        .then(response=>{
           var resdat=Array.from(response.data);
           console.log(response);
            this.setState({materiel:resdat});
        });
    }

  render() {
    return (
      <MaterialTable
        title="Mise a jour Votre Materiels"
        columns={this.state.columns}
        data={this.state.materiel}

        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  const materiel = this.state.materiel;
                  materiel.push(newData);
                  this.setState({ materiel }, () => resolve());
                   this.setState({ newData: newData });
                   axios.post('/updatemaNEW',this.state).then(response=>{
               console.log(response);
                
            }).then(error=>{
                console.log(error);
            });
                  
                }
                resolve()
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  this.setState({ oldData: oldData });
                  const materiel = this.state.materiel;
                  const index = materiel.indexOf(oldData);
                  
                  materiel[index] = newData;
                  this.setState({ materiel }, () => resolve());
                   this.setState({ index: index });
                  console.log(index);
                 // e.preventDefault();
            
            axios.post('/updatemaADD',this.state).then(response=>{
               console.log(response);
                
            }).then(error=>{
                console.log(error);
            });
                }
                resolve()
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                {
                  let materiel = this.state.materiel;
                  const index = materiel.indexOf(oldData);
                  materiel.splice(index, 1);
                  this.setState({ materiel }, () => resolve());
                  this.setState({ oldData: oldData });
                
                  axios.post('/updatemaDELE',this.state).then(response=>{
               console.log(response);
                
            }).then(error=>{
                console.log(error);
            });
                }
                resolve()
              }, 1000)
            }),
        }}
      />
    )
  }
}

ReactDOM.render(<Updatema />, document.getElementById('react-div'));