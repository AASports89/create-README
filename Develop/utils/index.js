//************************* PACKAGES REQUIRED FOR THIS APP ************************//
  const inquirer = require("inquirer");
  const fs = require("fs");
  const {writeFile} = require("./Devlp/createREADME");

//************************** ARRAY OF QUESTIONS FOR USERS *************************//
  const promptUser = () => {
  return inquirer.prompt([
//QUESTION #1: TITLE//
    {
      type: "input",
      name: "title",
      message: "Enter your project's title (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a title for your project");
          return false;
        }
      },
    },
//QUESTIONS #2: DESCRIPTION//
    {
      type: "input",
      name: "description",
      message: "Enter a brief description of your project",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a description for your project");
          return false;
        }
      },
    },
//QUESTION #3: INSTALLATION//
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions for your project",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        }
        else {
          console.log(
            "Please enter installation instructions for your project"
          );
          return false;
        }
      },
    },
//QUESTION #4: USAGE//
    {
      type: "input",
      name: "usage",
      message: "Enter usage information for your project",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter usage information for your project");
          return false;
        }
      },
    },
//QUESTION #5: IMAGES//
    {
      type: "input",
      name: "images",
      message: "Attach any .jpg/.png/.gif files displaying project by copying '<img src=./Devlp/images/#.jpg/png/gif>' in the response area (Recommended)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please place any relevant .jpg/.png/.gif files in the 'images' folder located in the 'Devlp' folder");
          return false;
        }
      },
    },
//QUESTION #6: CONTRIBUTIONS//
{
  type: "input",
  name: "contribution",
  message: "Enter your contributions for this project (Required)",
  validate: (nameInput) => {
    if (nameInput) {
      return true;
    } else {
      console.log("Please enter your contributions for this project");
      return false;
    }
  },
},
//QUESTION #7: TEST//
    {
      type: "input",
      name: "test",
      message: "Enter your testing guidelines for this project (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter testing guidelines for your project");
          return false;
        }
      },
    },
//QUESTION #8: DEPLOYED WEBPAGE URL//
{
  type: "input",
  name: "deployedURL",
  message: "Enter the project's depolyed webpage URL (Required)",
  validate: (nameInput) => {
    if (nameInput) {
      return true;
    } else {
      console.log("Please enter the project's depolyed webpage URL");
      return false;
    }
  },
},
//QUESTION #9: GITHUB LINK//
    {
      type: "input",
      name: "github",
      message: "Enter your github link (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your github link");
          return false;
        }
      },
    },
    //QUESTION #10: LICENSE//
    {
      type: "list",
      name: "license",
      message: "Choose a software license for this project (Required)",
      choices: ["MIT", "AGPL-3.0", "GPL-3.0", "N/A"],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please choose a license for your project");
          return false;
        }
      },
    },
  ]);
};

//INITIALIZATION//
function init() {
  promptUser().then((data) => {
    writeFile(data);
  });
}

//CALL INITIALIZATION//
init();