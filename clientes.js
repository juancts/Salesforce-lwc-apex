import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createCliente from '@salesforce/apex/createCli.createCliente';


export default class Clientes extends LightningElement {
  @track nombre = '';
  @track apellido = '';
  @track telefono = '';
  @track email = '';
  
  clientes = []
    

handleNameChange(e){
  this.nombre = e.target.value;
  console.log("Nombre:", this.nombre)
}

handleLastNameChange(e){
  this.apellido = e.target.value;
  console.log("Apellido:", this.apellido)
}

handlePhoneChange(e){
  this.telefono = e.target.value;
  console.log("Telefono:", this.telefono)
}

handleEmailChange(e){
  this.email = e.target.value;
  console.log("Email:", this.email)
}

handleClick() {
  if (this.nombre && this.apellido) {
    const nuevoCliente = {
      Nombre__c: this.nombre,
      Apellido__c:this.apellido,
      Email__c:this.email,
      Telefono__c:this.telefono
    }

  createCliente({ cli :  nuevoCliente}).then(res=>{
    this.clientes.push(res);
    
  
    //INICIALIZO
    this.nombre = '';
    this.apellido ='';
    this.email = '';
    this.telefono='';
    this.showToast('Éxito', 'Se ha insertado con éxito los datos del nuevo cliente', 'success');
  }).catch(error => {
    this.showToast('Error', error.body.message, 'error');
  });
}else{
  this.showToast('Error', ' Falta nombre y apellido', 'error');

}

}

showToast(title, message, variant) {
  const event = new ShowToastEvent({
  title: title,
  message: message,
  variant: variant
});
this.dispatchEvent(event);
}

}
