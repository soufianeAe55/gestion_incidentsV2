import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export default class afficheinc extends Component {
     constructor(){
        super();
        this.state={
            incidents:[]
        }
    }
    componentDidMount(){
        axios.get('/afficheinc')
        .then(response=>{
            this.setState({incidents:response.data});
        });
    }

render(){
    

return(
<div className="page-content">

<div id="table">
<table class="table">
  <thead>
    <tr>
    
          <th scope="col">N° d'incident</th>
	      <th scope="col">N° du Matériel</th>
	      <th scope="col">Type d'incident</th>
        <th scope="col">Description d'incident</th>
	      <th scope="col">La date d'incident</th>
        <th scope="col">réparer par</th>
	      <th scope="col">commentaire </th>
	      <th scope="col">Date du traitment</th>
        <th scope="col">La date de réception</th>
        <th scope="col">Résultat du traitement</th>
        
    </tr>
  </thead>
  <tbody>
    {
    this.state.incidents.map(incident=>{
        return(
        <tr>
      <th scope="row">{incident.id}</th>
      <td id="row">{incident.id_materiel }</td>
      <td>{incident.Type_inc}</td>
      <td>{incident.Des_inc}</td>
      <td>{incident.Pk_date}</td>
      <td>{incident.Nom_collabSI}</td>
      <td>{incident.com_SI}</td>
      <td>{incident.Date_Traitement}</td>
      <td>{incident.disponible}</td>
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