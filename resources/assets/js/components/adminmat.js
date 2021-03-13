import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 class Adminmat extends React.Component {
     constructor(){
        super();
        this.state={
            matnum: '',
            datetr: new Date(),
			desc: '',
			conse: '',
			daterec: new Date(),
			resu: '',
			
        }
    }
    thismatnum(e){
        this.setState({
            matnum:e.target.value
        });    }
		
    thisdatetr(date){
        this.setState({
            datetr:date
        });   
         }
	thisdesc(e){
        this.setState({
            desc:e.target.value
        });    }
    thisconse(e){
        this.setState({
            conse:e.target.value
        });   
         }
	thisdaterec(date){
        this.setState({
            daterec:date
        });    }
    thisresu(e){
        this.setState({
            resu:e.target.value
        });   
         }
          submit(e){
            e.preventDefault();
            console.log(this.state);
            axios.post('/adminins',this.state).then(response=>{
               console.log(response);
                
            }).then(error=>{
                console.log(error);
            });
        }
    
    render() {
       
      return (
          <div className="card" id="card">
           <form id="form" onSubmit={this.submit.bind(this)} method="post" >
           
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">N° du Matériel (*)</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="N° du Matériel"
      onChange={this.thismatnum.bind(this)} value={this.state.matnu} required/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Date du Traitement(*)</label>
       <DatePicker   className="form-control" id="inputPassword4" placeholder="Date du Traitement" 
       onChange={this.thisdatetr.bind(this)} selected={this.state.datetr} required />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Description du problème(*)</label>
   <textarea className="form-control" aria-label="Description" 
    onChange={this.thisdesc.bind(this)} value={this.state.desc} required></textarea>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Des conseils pour l'utilisation(*)</label>
    <textarea className="form-control" aria-label="Des conseils" 
      onChange={this.thisconse.bind(this)} value={this.state.conse} required></textarea>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">La date de réception(*)</label>
      <div className="form-group">
            
         <DatePicker  
       onChange={this.thisdaterec.bind(this)} selected={this.state.daterec} required />
                    
                
    </div>

</div>

    <div className="form-group col-md-4">
      <label htmlFor="inputState">Résultat(*) </label>
      <select id="inputState" className="form-control" 
       onChange={this.thisresu.bind(this)} value={this.state.resu} required>
        <option >choisir...</option>
        <option value="En attente">En attente</option>
        <option value="Reparer">Reparer</option>
        <option value="No Reparer">No Reparer</option>
      </select>
    </div>
    </div>
  
  
  <button type="submit" className="btn btn-primary">Ajouter</button>
</form>
</div>
        );
    }
}
if (document.getElementById('examp')) {
    ReactDOM.render(<Adminmat />, document.getElementById('examp'));
}
