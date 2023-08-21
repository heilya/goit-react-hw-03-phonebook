import React from "react";
import { ContactListItem } from "./contactlistitems/contactlistitems";
import{List, Container} from "./contactlist.styled";


export const ContactList = ({contacts, onDelete}) => (
    <Container><List>
    {contacts.map((contact => (<ContactListItem key={contact.id} name={contact.name} number ={contact.number} onDelete={onDelete} id={contact.id}/> 
)))}
</List></Container> 
);