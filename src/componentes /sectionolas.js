import React from "react";

const estiloImagen = {
    width:"100%",
}

const sectionolas = (props) => {
  return (
    
    <div >
      <img className="img-fluid"  style={estiloImagen} src={props.imagen_pie_pagina}></img>
    </div>
  );
};

export default sectionolas;
