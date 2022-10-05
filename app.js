const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

//  const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', generatePage(name,github), err => {

//     if (err) throw (err);

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });
const promptUser = ()=> {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?(Required)',
            validate: nameInput=> {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: githubInput=> {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your username!');
                    return false;
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you liek to enter some information about youreself for an "About" Section?',
            default: true
        }
    ]);
};

const promptProject = portfolioData => {
   if   (!portfolioData.projects) {
        portfolioData.projects=[];
   }
    console.log(`
    
    =================
    Add a New Project - polygodentrosights
    =================
    
    `);

    return inquirer.prompt
    ([
        {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?(Required)',
        validate: projectNameInput=> {
            if (projectNameInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
        },
        {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput=> {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter your description!');
                return false;
            }
        }
        },
        {
        type: 'checkbox', 
        name: 'languages',
        message: "What did you build this project with? (Check all that apply)",
        choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
        type:'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate:linkInput=> {
            if (linkInput) {
                return true;
                }else {
                console.log('Please enter your link!');
                return false;
            }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject){
            return promptProject(portfolioData);
        }else {
            return portfolioData
        }
    }); 
};

promptUser()
.then(promptProject)
.then(portfolioData => {
    console.log(portfolioData);
});