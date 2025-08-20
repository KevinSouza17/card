import React from "react";

function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>{ano} Todos os direitos de Kevin Gabriel de Souza</p>
    </footer>
  );
}

export default Footer;

