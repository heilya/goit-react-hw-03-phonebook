// import { render } from "@testing-library/react";
import { Component } from "react";
import { Filter } from "./filter/filter";
import { ContactForm} from "./contactform/contactform";
import { nanoid } from 'nanoid';
import { ContactList } from "./contactlist/contactlist";

export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  };

  handleSubmitForm = ({name,number}) =>{
    if(this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      window.alert("This name is already in the contact list.");
      return;
    }
    this.setState({contacts: [...this.state.contacts, {name: name,number:number, id: nanoid()}]});
  };
  handleFilterChange = event => {
    this.setState({filter: event.currentTarget.value});
  };

  handleDelete =(id)=>{
    this.setState(prevState=>{
      return {
        contacts: prevState.contacts.filter(contact => contact.id!== id)
      }
    })
  }



  render(){

const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));


    return (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#010101',
  }}>
    <h1>Phonebook</h1>
    <ContactForm onSumbit={this.handleSubmitForm}/>
    <h2>Contacts</h2>
    <Filter value={this.state.filter} onChange={this.handleFilterChange}/>
    <ContactList contacts={visibleContacts} onDelete={this.handleDelete}/>
  </div>
    ); 
  }
    
};
