function Project({ project }) {
    return (
      <div key={project.id}>
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-desc">{project.description}</p>
        <a href={project.repo} target="_blank" rel="noreferrer">
          <p className="proj-desc">View My Repo</p>
          <br></br>
          <br></br>
        </a>
      </div>
    );
  }
  
  export default Project;