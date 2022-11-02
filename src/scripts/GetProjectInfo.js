function GetProjectInfo(designProjectList, chosenProject) {

  //checks projects and chooses right one
  var projectInfo = {};

  designProjectList.map((project, index) => {
    if (Object.values(project)[0] === chosenProject) {
      projectInfo = designProjectList[index];
    }
    
  });
  return projectInfo; 
}

export default GetProjectInfo; 
