import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AsideImage from "../components/AsideImage/AsideImage";
import BrandApp from "../components/BrandApp/BrandApp";
import FormHeading from "../components/FormHeading/FormHeading";
import Registernput from "../components/RegisterInput/RegisterInput";
import SwitchFormLink from "../components/SwitchFormLink/SwitchFormLink";
import { asyncRegisterUser } from "../states/users/action";

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate("/");
  };

  return (
    <div className="login-container">
      <article className="sign-form">
        <BrandApp />
        <div className="form-section">
          <FormHeading
            heading="Buat Akun"
            text="Mari bergabung bersama kami dan dapatkan pengetahuan yang baru"
          />
          <Registernput register={onRegister} />
          <SwitchFormLink text="Sudah punya akun?" link="Masuk" href="/" />
        </div>
      </article>
      <AsideImage />
    </div>
  );
}
