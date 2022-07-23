const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Employee = require('./lib/Employee');
const { choices } = require('yargs');

const teamArray = []


// type, name , message, validate,  
// choose what kind of team member you like to add
function createTeam() {
    inquirer.prompt([
        {
            name: 'createteam',
            type: 'list',
            message: 'whould you like to add any employees?',
            choices: ['engineer', 'intern', 'No']
        }
    ])
    .then((answers) => {
        if(answers.createTeam === 'engineer') {
            engineerPrompt()
        }
        else if(answers.createTeam === 'intern') {
            internPrompt()
        }
        else if(answers.createTeam === 'No') {
            generatelHtml()
        }
        else {
            
        }
    })
    .catch((err) => console.error(err) )
}


function internPrompt() {
    inquirer
    .prompt([
        {
            name: 'internName',
            message: "Please type Intern Name",
            type: 'input'
        },

        {
            name: 'internID',
            message: "Please type Intern ID Number",
            type: 'input',
        },

        {
            name: 'internEmail',
            message: 'Please input your E-Mail',
            type: 'input',
        },

        {
            name: 'internScholl',
            message: "Please input your school",
            type: 'input',
        },

                   
           
    ])
    .then((data) => {
        const intern = new Intern(
            data.name,
            data.id,
            data.email,
            data.school
        );
       teamArray.push(intern)
       createTeam();
    });
}


function engineerPrompt() {
    inquirer
    .prompt ([
        {
            name: 'engineerName',
            message: "Whats the name of the Engineer?",
            type: 'input'  
        },
        {
            name: 'engineerID',
            message: "Whats the ID of the Engineer",
            type: 'input',
        },
        {
            name: 'engineerEmail',
            message: "whats the email of the engineer?",
            type: 'input',
        },
        {
            name: 'engineerGithub',
            message: "Please enter your Github",
            type: 'input'
        },
        
    ])
    .then((data) => {
        const engineer = new Engineer(
            data.name,
            data.id,
            data.email,
            data.github,
        );
       teamArray.push(engineer)
       createTeam();
    });
}


function managerPrompt() {
    inquirer
    .prompt([
        {
            name: 'managerName',
            message: "Name of the manager",
            input: 'type',
        },
        {
            name: 'managerId',
            message:"whats the ID number if the manager?",
            input: 'type',
        },
        {
            name: 'managerEmail',
            message: 'Whats the Email of manager?',
            input: 'type',
        },
        {
            name: 'managerOfficeNumber',
            message: "Please enter ypur office number",
            input: 'type',
        },
        
    ])
    .then((data) => {
        const manager = new Manager(
            data.name,
            data.id,
            data.email,
            data.officeNumber,
        );
        teamArray.push(manager)
        createTeam();
    });
}





function generatelHtml(){
    const stringifiedTeam = JSON.stringify(team);
    fs.writeFile('team.txt', stringifiedTeam, 'utf-8', (err) => {
        if (err) {
            console.log('Something Wrong');
        } else {
            console.log('team successfully written');
        }
    })
}


createTeam();

