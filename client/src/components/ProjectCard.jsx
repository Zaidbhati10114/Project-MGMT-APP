export default function ProjectCard({ project }) {
  return (
    <div className="col-md-6">
      <div className="div card mb-3">
        <div className="div card-body">
          <div className="d-flex justify-content-center align-items-center">
            <h5 className="card-title p-3">{project.name}</h5>
            <a className="btn btn-light" href={`/projects/${project.id}`}>
              View
            </a>
          </div>
          <p className="small">
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
