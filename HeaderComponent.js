import styled from "styled-components";
export const Header = styled.div `
color:black;
background-color:hotpink;
padding: 20px;
font-family:Verdana;
align-items:center;
justify-content:space-between;
display:flex;
flex-direction:row;
font-weight:bolder;
box-shadow:0 3px 6px 0 #555;
`;
export  const AppComponent=styled.div`
display:flex;
align-items:center;
`;
  
export const AppIcon=styled.img`
width:33px;
height:33px;
margin:15px;`;
export const SearchIconComponent=styled.img`
width:33px;
height:33px;
`;
export const SearchBarComponent=styled.div`
display:flex;
align-items:center;
flex-direction:row;
background-color:white;
padding:1px;
width:50%;
border-radius:10px;
margin-left:15px;
font-size:16px;
font-weight:bolder;
`;
export const SearchBarInput=styled.input`
border:none;
outline:none;`;