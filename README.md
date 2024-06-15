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
- Adds project to src/information/DesignProjects.js
- Adds new page to src/pages/designProjects

### Further to do's

- Change project information in src/information/DesignProjects.js
- Add thumbnail in public/Projects/[name of project]
- Change page itself on src/pages/designProjects

To change the template of the project go to src/components/PageTemplate/projectTemplate.js
