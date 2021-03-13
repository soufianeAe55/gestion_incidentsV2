import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export default class affichemat extends Component {
     constructor(){
        super();
        this.state={
            materiels:[]
        }
    }
    componentDidMount(){
        axios.get('/affichemat')
        .then(response=>{
          console.log(response.data);
            this.setState({materiels:response.data});
        });
    }

render(){
    

return(
<div className="page-content">

<div id="table">
<table class="table">
  <thead>
    <tr>
          <th scope="col">N° du Matériel</th>
	      <th scope="col">Type</th>
	      <th scope="col">Nom de La collaborateur</th>
	      <th scope="col">Référence</th>
	      <th scope="col">Marque</th>
	      <th scope="col">Prix</th>
	      <th scope="col">Lieu d'achat</th>
	      <th scope="col">Date d'achat</th>
	      <th scope="col">Couleur</th>
           <th scope="col">Entite</th>
          <th scope="col">Résultat du traitement</th>
    </tr>
  </thead>
  <tbody>
    {
    this.state.materiels.map(materiel=>{
        return(
        <tr>
      <th scope="row">{materiel.id}</th>
      <td id="row">{materiel.typemat}</td>
      <td>{materiel.Nom_coll}</td>
      <td>{materiel.Ref}</td>
      <td>{materiel.Marque}</td>
      <td>{materiel.prix}</td>
      <td>{materiel.lieu_ach}</td>
      <td>{materiel.date_ach}</td>
      <td>{materiel.couleur}</td>
      <td>{materiel.entite}</td>
       <td>{materiel.Resultat}</td>
    </tr>
    )
    })
    
    }
  </tbody>
</table>

</div>
</div>
);
}
}