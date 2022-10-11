import { gql } from "@apollo/client";

// const ADD_CLIENT = gql`
//   mutation addClient($name: String!, $email: String!, $phone: String!) {
//     addClient(name: $name, email: $email, phone: $phone) {
//       id
//       name
//       email
//       phone
//     }
//   }
// `;

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`;

export { GET_PROJECTS };
