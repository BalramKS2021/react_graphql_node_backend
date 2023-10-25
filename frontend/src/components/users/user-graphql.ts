import { gql } from "@apollo/client";
export interface User {
  _id?: string;
  name: string;
  age: number;
}
export const GET_ALL_USERS_QUERY = gql`
  query GetAllUsers {
    users @rest(type: "Get All Users", path: "users") {
      _id
      name
      age
    }
  }
`;

export const GET_USER_QUERY = gql`
  query GetUser($Id: ID!) {
    user(id: $Id) @rest(type: "Get User", path: "user/{args.id}") {
      _id
      name
      age
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation AddUser {
    addUser(input: $input)
      @rest(type: "Create New User", path: "user", method: "POST") {
      name
      age
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($Id: ID!, $input: INPUT!) {
    user(id: $Id, input: $input)
      @rest(type: "Update User", path: "user/{args.id}", method: "PATCH") {
      name
      age
    }
  }
`;

export const USER_DELETE_QUERY = gql`
  mutation GetUser($Id: ID!) {
    user(id: $Id)
      @rest(type: "Delete User", path: "user/{args.id}", method: "DELETE") {
      _id
    }
  }
`;
