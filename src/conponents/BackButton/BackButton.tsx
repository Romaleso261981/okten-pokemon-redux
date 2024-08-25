import React from "react";
import { useNavigate } from "react-router-dom";

import s from "./BackButton.module.css";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={s.wrapper}>
      {/* <h1>Back Button</h1> */}
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default BackButton;
