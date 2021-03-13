import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export default class addmat extends Component {
	 constructor(){
        super();
        this.state={
            typemat: '',
            ref: '',
			marque: '',
			prix: '',
			color: '',
			lieuach: '',
			dateach: '',
			entite: '',
			typeinc: '',
			dateinc: '',
			descri: ''
        }
    }
	thismarque(e){
        this.setState({
            marque:e.target.value
        });    }
		
    thisprix(e){
        this.setState({
            prix:e.target.value
        });   
         }
	thiscolor(e){
        this.setState({
            color:e.target.value
        });    }
    thislieuach(e){
        this.setState({
            lieuach:e.target.value
        });   
         }
	thisdateach(e){
        this.setState({
            dateach:e.target.value
        });    }
    thisentite(e){
        this.setState({
            entite:e.target.value
        });   
         }
	thistypeinc(e){
        this.setState({
            typeinc:e.target.value
        });    }
    thisdateinc(e){
        this.setState({
            dateinc:e.target.value
        });   
         }
		 thisdescri(e){
        this.setState({
            descri:e.target.value
        });   
         }
    thistypemat(e){
        this.setState({
            typemat:e.target.value
        });    }
    thisref(e){
        this.setState({
            ref:e.target.value
        });   
         }
        submit(e){
            e.preventDefault();
            console.log(this.state);
            axios.post('/addmat',this.state).then(response=>{
               console.log(response);
                
            }).then(error=>{
                console.log(error);
            });
        }
    
    render() {

      return (
      <div className="page-content">
		<div className="form-v10-content">
			<form className="form-detail" onSubmit={this.submit.bind(this)} method="post" id="myform">
			   
				<div className="form-left">
					<h2>Matériel</h2>
					<div className="form-row">
						<select name="Typma" onChange={this.thistypemat.bind(this)} 
                             value={this.state.typemat} required  >
						<option className="option" value="Type Du Materiél">Type Du Materiél</option>
						   <option className="option" value="Imprimante">Imprimante</option>
							<option className="option" value="Ordinateur">Ordinateur</option>
							<option className="option" value="Pc Portable">Pc Portable</option>
							<option className="option" value="Disc Dure">Disc Dure</option>
							<option className="option" value="Serveur">Serveur</option>
						    
						</select>
						<span className="select-btn">
						  	<i className="zmdi zmdi-chevron-down"></i>
						</span>
					</div>
					<div className="form-group">
						<div className="form-row form-row-1">
							<input type="text" name="Référence" id="first_name" className="input-text"  onChange={this.thisref.bind(this)} 
                             value={this.state.ref} placeholder="Référence" required />
						</div>
						<div className="form-row form-row-2">
							<input type="text" name="Marque" id="last_name" className="input-text" onChange={this.thismarque.bind(this)} 
                             value={this.state.marque} placeholder="Marque" required  />
						</div>
					</div>
					<div className="form-group">
						<div className="form-row form-row-1">
							<input type="text" name="Prix" id="first_name" className="input-text" onChange={this.thisprix.bind(this)} 
                             value={this.state.prix} placeholder="Prix" required />
						</div>
						<div className="form-row form-row-2">
							<input type="text" name="Couleur" id="last_name" className="input-text" onChange={this.thiscolor.bind(this)} 
                             value={this.state.color} placeholder="Couleur" required />
						</div>
					</div>
					
					<div className="form-row">
						<input type="text" name="Lieu d'achat" className="company" id="company"  onChange={this.thislieuach.bind(this)} 
                             value={this.state.lieuach} placeholder="Lieu d'achat" required />
					</div>
					<div className="form-row">
						<input type="date" name="Date d'achat" className="company" id="company"  onChange={this.thisdateach.bind(this)} 
                             value={this.state.dateach} placeholder="Date d'achat"  required />
					</div>
					<div className="form-row">
						<select name="Ent" onChange={this.thisentite.bind(this)} 
                             value={this.state.entite} required >
						<option className="option" value="Votre Entité">Votre Entité</option>
						   <option className="option" value="RH">RH</option>
							<option className="option" value="DSI">DSI</option>
							<option className="option" value="Finance">Finance</option>
							<option className="option" value="Domaine Export">Domaine Export</option>
							
						    
						</select>
						<span className="select-btn">
						  	<i className="zmdi zmdi-chevron-down"></i>
						</span>
					</div>
						
				
				</div>
				<div className="form-right">
					<h2>L'incident</h2>
					
					<div className="form-group">
						
						<div className="form-row">
						<select name="typein" onChange={this.thistypeinc.bind(this)} 
                             value={this.state.typeinc} required>
						<option className="option" value="Type D'incident">Type D'incident</option>
						   <option className="option" value="Software">Software</option>
							<option className="option" value="Hardware">Hardware</option>
				 
						</select>
						<span className="select-btn">
						  	<i className="zmdi zmdi-chevron-down"></i>
						</span>
					</div>
					</div>
				
					
					<div className="form-row">
						<input type="date" name="Dateinc" id="your_email" className="input-text"  onChange={this.thisdateinc.bind(this)} 
                             value={this.state.dateinc}  pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="La date d'incident" required />
					</div>
					<div className="form-row">
					<textarea size="45" cols="34" rows="6"  id="descr" className="input-text" name="Descriptioninc"  onChange={this.thisdescri.bind(this)} 
                             value={this.state.thisdescri} placeholder="Description d'inciden" required ></textarea>
					</div>
					<div className="form-row-last">
						<input type="submit" name="register" className="register" value="Ajouter Votre Matériel" />
					</div>
				</div>
			</form>
		</div>
	</div>

        );
    }
}


