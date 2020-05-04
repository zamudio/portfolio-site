import React from "react";
import Button from "@material-ui/core/Button";

import Toggle from "./Toggle";
import useDarkMode from "use-dark-mode";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <Button type="button" variant="contained" onClick={darkMode.disable}>
        ☀
      </Button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <Button type="button" variant="contained" onClick={darkMode.enable}>
        ☾
      </Button>
    </div>
  );
};

export default DarkModeToggle;
