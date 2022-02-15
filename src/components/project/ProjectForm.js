const ProjectForm = () => {
  return (
    <form action="">
      <div>
        <input type="text" name="" id="" placeholder="Enter project name" />
      </div>
      <div>
        <input type="number" name="" id="" placeholder="Enter budget" />
      </div>
      <div>
        <select name="category_id">
          <option disabled>Select category</option>
        </select>
      </div>
      <div>
          <input type="submit" value="Create Project" />
      </div>
    </form>
  );
};

export default ProjectForm;
