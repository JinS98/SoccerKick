import { gql } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export const LOG_OUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;
