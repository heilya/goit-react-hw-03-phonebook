import React from "react";
import{Wrapper, Button} from "./contactlistitems.styled";


export const ContactListItem =({id,name, number, onDelete}) => (
    <Wrapper><li>{name}: {number}</li>
    <Button onClick={()=>onDelete(id)}>Delete</Button>
    </Wrapper>
);



