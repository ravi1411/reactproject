import React from 'react';

function Add(a,b)
{
    return (a+b);
}

function SUb(a,b)
{
    return (a-b);
}


function Mul(a, b) {
  return a * b;
}


function Div(a, b) {
  var c= a / b;

  c=c.toFixed(2);
  return(c);

}


export {Add,SUb,Mul,Div};