//************************* PACKAGES REQUIRED FOR THIS APP ************************//
  const inquirer = require("inquirer");
  const fs = require("fs");
  const {writeFile} = require("./Develop/utils/createREADME");

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
      default: 'npm install',
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
      message: "Attach any .jpg/.png/.gif files displaying project by copying '<img src=./Develop/images/#.jpg/png/gif>' in the response area (Recommended)",
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
      default: 'npm test',
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
      type: "checkbox",
      name: "badge",
      message: "Select a software license badge for this project (Required)",
      choices: [
      "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](#license)", 
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](#license)", 
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](#license)", 
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](#license)", 
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)", 
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](#license)", 
      "N/A"
      ],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please select a valid license badge for your project");
          return false;
        }
      },
    },
    //QUESTION #11: LICENSE EXPLANATION//
    {
      type: "checkbox",
      name: "license",
      message: "Select the license explanation corresponding to the chosen license badge. (Required)",
      choices: [
        "**AGPL 3.0** The GNU Affero General Public License is a free, copyleft license for software and other kinds of works, specifically designed to ensure cooperation with the community in the case of network server software. The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, our General Public Licenses are intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. https://www.gnu.org/licenses/agpl-3.0",
        "**GPL 3.0**The GNU General Public License is a free, copyleft license for software and other kinds of works. The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too. https://www.gnu.org/licenses/gpl-3.0",
        "**ISC** Copyright © <ENTER YEAR> <ENTER OWNER> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies. THE SOFTWARE IS PROVIDED 'AS IS' AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.",
        "**MIT** Copyright © <ENTER YEAR> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
        "**MPL 2.0** https://opensource.org/licenses/MPL-2.0",
        "**UNLICENSE** This is free and unencumbered software released into the public domain. Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compile binary, for any purpose, commercial or non-commercial, and by any means. In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.For more information, please refer to <http://unlicense.org/>",
        "N/A"
      ],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please make a valid license explanation selection.");
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