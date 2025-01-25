import styled from "styled-components";

export const ReceipeContainer=styled.div`
  display:flex;
  flex-direction:column;
  padding:30px;
  width:200px;
 
  color:black;
  box-shadow:0 3px 10px 0 #aaa;
  `;
export const CoverImage = styled.img`
  height:180px;

`;
export const ReceipeName=styled.span`
font-size:18px;
font-weight:bold;
color:black;
text-align:center;
`;
export const IngredientsText=styled.span`
font-size:18px;
border:solid 1px green;
border-radius:5px;
text-align:center;
color:Green;
cursor:pointer;
paadding :10px 15px;
align-items:center;
margin-top:5px;
margin-bottom:12px;
`;
export const SeeMoreText=styled.span`
font-size:18px;
text-align:center;
cursor:pointer;
border-radius:5px;
border:solid 1px red;
text-align:center;
color:red;
align-items:center;
`;