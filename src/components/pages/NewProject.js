import {useNavigate} from 'react-router-dom'
import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

const NewProject = () => {
  // Permite fazer redirects na página do sistema
  const navigate = useNavigate()

  const createPost = (project) => {
    //initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate('/project')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços </p>
      <ProjectForm handleSubmit={createPost} btnText="Create Project" />
    </div>
  );
};

export default NewProject;
