import sys
import copy
import os
import subprocess


def create_project(project_name):
    project_name_words = project_name.split('_')
    project_name_sep = copy.copy(project_name).replace('_', ' ')
    project_name_PC = ''.join(word for word in project_name_words)
    project_name_line = copy.copy(project_name).replace('_','-')

    # Put App.js into strings
    with open("src/App.js", "r") as path_file:
        path_file_lines = path_file.readlines()

    # Find where project path should be inserted
    insert_index = [i for i, x in enumerate(path_file_lines) if 'Insert project path above' in x][0]

    # Insert project path
    path_file_lines.insert(insert_index, f'const {project_name_PC} = React.lazy(() => import("./pages/designProjects/{project_name_PC}"));\n')
    
    # Find where project route should be inserted
    insert_index = [i for i, x in enumerate(path_file_lines) if 'Insert project route above' in x][0]

    # Insert project route
    route_lines = ['\t\t\t\t\t<Route\n', 
                   f'\t\t\t\t\t\tpath="{project_name_line}"\n', 
                   '\t\t\t\t\t\telement={\n', 
                   '\t\t\t\t\t\t\t<React.Suspense fallback={<>...</>}>\n', 
                   f'\t\t\t\t\t\t\t\t<{project_name_PC} />\n',
                   '\t\t\t\t\t\t\t</React.Suspense>\n', 
                   '\t\t\t\t\t\t}\n', 
                   '\t\t\t\t\t/>\n']

    for line in reversed(route_lines):
        path_file_lines.insert(insert_index, line)
    
    # Update file
    with open("src/App.js", "w") as path_file:
        path_file_lines = "".join(path_file_lines)
        path_file.write(path_file_lines)

    # Put DesignProjects.js into strings
    with open("src/information/DesignProjects.js", "r") as path_file:
        path_file_lines = path_file.readlines()
    
    # Find where project path should be inserted
    insert_index = [i for i, x in enumerate(path_file_lines) if 'Insert project above' in x][0]

    # Insert project route
    project_lines = ['designProjectList.push({\n',
                   f'\tname: "{project_name_sep}",\n',
                   '\tdescription: "Desciption here",\n',
                   '\texplanation: "Explanation here",\n',
                   '\ttype: "Type",\n',
                   '\tyear: "year",\n',
                   '\tteam: "Team type",\n',
                   '\ttextColor: "white",\n',
                   '\tbackgroundColor: "#7c91c2",\n',
                   '});\n',]
    
    for line in reversed(project_lines):
        path_file_lines.insert(insert_index, line)
    
    # Update file
    with open("src/information/DesignProjects.js", "w") as path_file:
        path_file_lines = "".join(path_file_lines)
        path_file.write(path_file_lines)
    
    # Open template and add to designProjects folder
    with open("src/components/PageTemplates/ProjectTemplate.js", "r") as path_file:
        new_text = path_file.read().replace('TITLE_FIXME_SEP', project_name_sep)
        new_text = new_text.replace('TITLE_FIXME_PC', project_name_PC)
    
    with open(f"src/pages/designProjects/{project_name_PC}.js", "w") as path_file:
        path_file.write(new_text)

    # Print to terminal
    print(f"\033[32mNew project: {project_name} has been created\033[0m")
    print(f"\033[34mThe new project file could be found here: src/pages/designProjects/{project_name_PC}.js\033[0m (ctrl + click)")
    print("\033[31mDon't forget to add data on src/information/DesignProjects.js!\033[0m (ctrl + click)")

def create_company(company_name):
    company_name_words = company_name.split('_')
    company_name_sep = copy.copy(company_name).replace('_', ' ')
    company_name_PC = ''.join(word for word in company_name_words)
    company_name_line = copy.copy(company_name).replace('_','-')

    # Put App.js into strings
    with open("src/App.js", "r") as path_file:
        path_file_lines = path_file.readlines()

    # Find where project path should be inserted
    insert_index = [i for i, x in enumerate(path_file_lines) if 'Insert company path above' in x][0]

    # Insert project path
    path_file_lines.insert(insert_index, f'const {company_name_PC.capitalize()} = React.lazy(() => import("./pages/company/{company_name_PC}"));\n')
    
    # Find where project route should be inserted
    insert_index = [i for i, x in enumerate(path_file_lines) if 'Insert company route above' in x][0]

    # Insert project route
    route_lines = ['\t\t\t\t\t<Route\n', 
                   f'\t\t\t\t\t\tpath="{company_name_line}"\n', 
                   '\t\t\t\t\t\telement={\n', 
                   '\t\t\t\t\t\t\t<React.Suspense fallback={<>...</>}>\n', 
                   f'\t\t\t\t\t\t\t\t<{company_name_PC.capitalize()} />\n',
                   '\t\t\t\t\t\t\t</React.Suspense>\n', 
                   '\t\t\t\t\t\t}\n', 
                   '\t\t\t\t\t/>\n']

    for line in reversed(route_lines):
        path_file_lines.insert(insert_index, line)
    
    # Update file
    with open("src/App.js", "w") as path_file:
        path_file_lines = "".join(path_file_lines)
        path_file.write(path_file_lines)

    # Open template and add to designProjects folder
    with open("src/components/PageTemplates/CompanyTemplate.js", "r") as path_file:
        new_text = path_file.read().replace('TITLE_FIXME_SEP', company_name_sep)
        new_text = new_text.replace('TITLE_FIXME_PC', company_name_PC)
    
    with open(f"src/pages/company/{company_name_PC}.js", "w") as path_file:
        path_file.write(new_text)

    # Print to terminal
    print(f"\033[32mNew company: {company_name} has been created\033[0m")
    print(f"\033[34mThe new project file could be found here: src/pages/company/{company_name_PC}.js\033[0m (ctrl + click)")

if __name__ == '__main__':
    call_function = sys.argv[1]
    name_file = sys.argv[2]

    if call_function == 'project':
        create_project(name_file)

    if call_function == 'company':
        create_company(name_file)