import React from "react";

function Cartao({ foto, nome, profissao, descricao }) {
  return (
    <div className="cartao">
      <img src={foto} alt={nome} />
      <h2>{nome}</h2>
      <h4>{profissao}</h4>
      <p>{descricao}</p>
    </div>
  );
}

export default Cartao;

