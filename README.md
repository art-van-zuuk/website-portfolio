# How to use this repository

## Start script

To start preview of website use:

### `npm start`

## Build script

To build the project. Afterwards files are saved in 'build' folder. Copy these into Hostinger.

### `npm run build`

**Note: When copying files to hostinger htaccess should not be deleted**

## Scripts to automate project page building

To add a new project to the website use:

### `py create_file.py project [name]`

**Note: [name] should be writen as you would want to see it on the website, except for spaces which should be underscores.
Example [name] = Weerwater_Track_App**

This function:

- Adds route to App.js
- Adds project to src/information/projects.js
- Adds new page to src/pages/projects

### Further to do's

- Change project information in src/information/DesignProjects.js
- Add thumbnail in public/Projects/[name of project]
- Change page itself on src/pages/designProjects

To change the template of the project go to src/components/PageTemplate/projectTemplate.js

## TO DO FOR ME!

- Change image of Rene van Zuuk Architects Website Thumbnail
- Add page for Website of DARE
- Change renders of SCULP
- Add thumbnails for 2 videos


## Scripts to automate company page building

To add a new project to the website use:

### `py create_file.py company [name]`

**Note: [name] should be writen as you would want to see it on the website, except for spaces which should be underscores.
Example [name] = Weerwater_Track_App**

This function:

- Adds route to App.js
- Adds new page to src/pages/company

### Further to do's

- Change page itself on src/pages/designProjects

To change the template of the project go to src/components/PageTemplate/companyTemplate.js

## TO DO FOR ME!

- Change image of Rene van Zuuk Architects Website Thumbnail
- Add page for Website of DARE
- Change renders of SCULP
- Add thumbnails for 2 videos
