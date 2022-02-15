import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

const ProjectForm = ({btnText}) => {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Project name"
        name="name"
        placeholder="Enter project name"
      />
      <Input
        type="number"
        text="Project Budget"
        name="budget"
        placeholder="Total budget"
      />

      <Select name="category_id" text="Select category" />

      <SubmitButton text={btnText}/>
    </form>
  );
};

export default ProjectForm;
