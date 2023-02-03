import React from 'react';
import AsideImage from '../components/AsideImage/AsideImage';
import BrandApp from '../components/BrandApp/BrandApp';
import FormHeading from '../components/FormHeading/FormHeading';
import Registernput from '../components/RegisterInput/RegisterInput';
import SwitchFormLink from '../components/SwitchFormLink/SwitchFormLink';

export default function RegisterPage() {
  return (
    <div className="login-container">
      <article className="sign-form">
        <BrandApp />
        <div className="form-section">
          <FormHeading
            heading="Buat Akun"
            text="Mari bergabung bersama kami dan dapatkan pengetahuan yang baru"
          />
          <Registernput />
          <SwitchFormLink text="Sudah punya akun?" link="Masuk" href="/" />
        </div>
      </article>
      <AsideImage />
    </div>
  );
}
