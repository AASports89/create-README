//******************************************************** GENERATE FILE *****************************************************//
  const fs = require('fs');

//INTERPOL VARIABLES - ${<VARIABLES>} SYNTAX//
//FUNCTION - CREATE README//
  function generateREADME(data) {
  return `
  # ${data.title}
  ---

  ${data.badge}

  ## Description
  ---
  ${data.description}
  
  ## Table of Contents
  ---
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Images GIFs](#images-gifs)
  * [Contribution](#contribution)
  * [Deployed Webpage URL](#deployed-webpage-url)
  * [GitHUB Repository](#github-repository)
  * [Tests](#tests)
  * [License](#license)
  * [Contact Info](#contactinfo)
  
  ## Installation
  ----
  ${data.installation}

  ## Usage
  ---
  ${data.usage}
  
  ## Images GIFs
  ---
  > **Note:** The following image(s) depict the functionality and look of my project:

  ${data.images}

  ## Contribution
  ---
  ${data.contribution}
  
  ## Deployed Webpage URL
  ---
  ${data.deployedURL}

  ## GitHUB Repository
  ---
  ${data.github}

  ## Tests
  ---
  ${data.tests}

  ## License
  ---
  ${data.license}
  
  ## Contact Info
  ---
  > **Note:** Any Questions? 
  > * Please visit my deployed URL ${data.deployedURL}
  > * Additionally, you can view the source code for this project and others @${data.github}

---
---
`;
}

function writeFile (data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./#sample#README.md", generateREADME(data), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ ok: true, message: "#sample#README.md created" });
    });
  });
};

//EXPORT OBJECT W/ FUNCTIONALITY//
  module.exports = {
    writeFile,
  };