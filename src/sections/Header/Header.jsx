import React, { useState } from "react";
import NavItems from "../../components/NavItems";

function Header() {
  const [mode, setMode] = useState(false);

  const handleClickMode = () => {
    setMode(true);
  };
  return (
    <div id="header-section">
      <button onClick={handleClickMode}>Dark Mode</button>
    </div>
  );
}

export default Header;
