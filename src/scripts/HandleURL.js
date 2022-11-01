function HandleURL(projectURL, openType='_self') {
  //gets company name from URL
  const URLparams = new URLSearchParams(window.location.search);
  const companyName = URLparams.get("name");

  const OpenURL = (projectURL, openType) => {
    
    var URL = projectURL;

    // changes name of project to URL format
    URL = URL.replace(/\s/g, "-");
    URL = URL.toLowerCase();

    //navigates to company home page if there is one
    if((URL === "" || URL === "/") && companyName != null){
      URL = companyName
    }

    //only adds postfix if already included
    if (companyName != null) {
      URL = URL + "?name=" + companyName;
    }


    console.log("test " + openType);
    window.open(URL, openType, "noopener,noreferrer");
  };

  //opens link
  OpenURL(projectURL, openType);
}

export default HandleURL;
