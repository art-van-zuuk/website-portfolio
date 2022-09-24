import projectList from "../components/Projects.js";

function GetProjectInfo(chosenProject) {
  //checks projects and chooses right one
  var projectInfo = {};

  projectList.map((project, index) => {
    if (Object.values(project)[0] == chosenProject) {
      projectInfo = projectList[index];
    }
  });

  return projectInfo;
}

export default GetProjectInfo;
