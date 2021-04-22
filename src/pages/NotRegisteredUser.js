import React, { useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../container/RegisterMutation";
import { useLoginMutation } from "../container/LoginMutation";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);

  const {
    registerMutation,
    dataRegister,
    loadingRegister,
    errorRegister,
  } = useRegisterMutation();
  const {
    loginMutation,
    dataLogin,
    loadingLogin,
    errorLogin,
  } = useLoginMutation();

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    registerMutation({ variables }).then(({ data }) => {
      const { signup } = data;
      activateAuth(signup);
    });
  };
  const errorRegisterMsg =
    errorRegister && "El usuario ya existe o hay algún problema.";

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    loginMutation({ variables }).then(activateAuth);
  };

  const errorLoginMsg =
    errorLogin && "El usuario y/o contraseña son incorrectos.";

  return (
    <>
      <UserForm
        onSubmit={onSubmit}
        title="Registrarse"
        error={errorRegisterMsg}
        disabled={loadingRegister}
      />
      <UserForm
        onSubmit={onSubmitLogin}
        title="Iniciar sesión"
        error={errorLoginMsg}
        disabled={loadingLogin}
      />
    </>
  );
};
