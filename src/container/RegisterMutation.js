import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;
export const useRegisterMutation = () => {
  const [registerMutation, { data, loading, error }] = useMutation(REGISTER);
  return {
    registerMutation,
    dataRegister: data,
    loadingRegister: loading,
    errorRegister: error,
  };
};
