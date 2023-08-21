// import { render } from "@testing-library/react";
import { Component } from "react";
import { Filter } from "./filter/filter";
import { ContactForm} from "./contactform/contactform";
import { nanoid } from 'nanoid';
import { ContactList } from "./contactlist/contactlist";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

componentDidUpdate(prevState) {
    if (prevState.contacts!== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    };
  };
  
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({contacts: parsedContacts});
    };
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
