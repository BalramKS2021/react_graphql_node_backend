import { gql } from "@apollo/client";
export interface User {
  _id?: string;
  name: string;
  age: number;
}
export const USER_QUERY = gql`
  query GetAllUser {
    users @rest(type: "Get All Users", path: "users") {
      _id
      name
    }
  }
`;

export const ADD_USER_MUTATION = gql`
  mutation AddUser {
    addUser(input: $input) @rest(type: "Create New User", path: "/user", method:"POST") {
      name
      age
    }
  }
`;