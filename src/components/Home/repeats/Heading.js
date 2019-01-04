import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1 `
dislay:inline-block;
color:${props => props.color?props.color:'#004191'};
border-bottom:${props => props.bcolor?`2px solid ${props.bcolor}`:"none"};
font-family:'Lato';
font-weight:100;
width:${props=> props.fullwidth?"100%":"500px"};
padding-bottom:5px;
`

export default Heading;
