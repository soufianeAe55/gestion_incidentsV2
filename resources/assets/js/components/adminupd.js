import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import axios from 'axios';
class Adminupd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
       { title: 'N° d\'incident', field: 'id' },
        { title: 'N° du Matériel', field: 'id_materiel' },
        { title: 'Admin commentaire', field: 'com_SI' },
        { title: 'Date de Traitement', field: 'Date_Traitement' },
        { title: 'Date de reception', field: 'disponible' },
      ],
      materiel: [],
      oldData: [],
      newData: [],
      index: ''
    }
  }
  
	    
  componentDidMount(){
        axios.get('/adminupd')
        .then(response=>{
           var resdat=Array.from(response.data);
           console.log(response);
            this.setState({materiel:resdat});
        });
    }

  render() {
    return (
      <MaterialTable
        title="Mise a jour"
        columns={this.state.columns}
        data={this.state.materiel}

        editable={{
          
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
            
            axios.post('/adminADD',this.state).then(response=>{
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
                
                  axios.post('/adminDELE',this.state).then(response=>{
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

ReactDOM.render(<Adminupd />, document.getElementById('react-up'));