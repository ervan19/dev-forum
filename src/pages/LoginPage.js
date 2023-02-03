import React from 'react';
import AsideImage from '../components/AsideImage/AsideImage';
import BrandApp from '../components/BrandApp/BrandApp';
import FormHeading from '../components/FormHeading/FormHeading';
import LoginInput from '../components/LoginInput/LoginInput';
import SwitchFormLink from '../components/SwitchFormLink/SwitchFormLink';

export default function LoginPage() {
  return (
    <div className="login-container">
      <article className="sign-form">
        <BrandApp />
        <div className="form-section">
          <FormHeading
            heading="Welcome Back! 🖐"
            text="Masukkan informasi yang Anda masukkan saat pendaftaran akun"
          />
          <LoginInput />
          <SwitchFormLink
            text="Belum punya akun?"
            link="Buat Akun"
            href="/register"
          />
        </div>
      </article>
      <AsideImage />
    </div>
  );
}