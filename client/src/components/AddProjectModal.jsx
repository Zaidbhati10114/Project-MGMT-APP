import { useState } from "react";
import { FaList } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
//import { ADD_PROJECT } from "../queries/projectQueries";
import { GET_PROJECTS } from "../queries/projectQueries";

export default function AddClientModal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("new");

  //   const [addClient] = useMutation(ADD_CLIENT, {
  //     variables: { name, email, phone },
  //     update(cache, { data: { addClient } }) {
  //       const { clients } = cache.readQuery({
  //         query: GET_CLIENTS,
  //       });
  //       cache.writeQuery({
  //         query: GET_CLIENTS,
  //         data: { clients: clients.concat([addClient]) },
  //       });
  //     },
  //   });

  const onSubmit = (event) => {
    event.preventDefault();
    if (name === "" || description === "" || status === "") {
      return alert("Please Enter in all fields");
    }
    // addProject(name, description, status);
    setName("");
    setDescription("");
    setStatus("new");
    setClientId("");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#AddProjectModal"
      >
        <div className="d-flex align-items-center">
          <FaList className="icon" />
          <div>New Projects</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="AddProjectModal"
        aria-labelledby="AddProjectModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="AddProjectModal">
                Add Project
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="new">Not Started</option>
                    <option value="progress">Not Started</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <button
                  className="btn btn-primary"
                  type="submit"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
