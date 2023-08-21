import React from "react";
import { Container, Title, Input } from "./filter.styled";


export const Filter = ({value, onChange}) => (
    <Container><Title>Find contacts by name</Title>
    <Input type="text" name="filter" value={value} onChange={onChange}/></Container>
);