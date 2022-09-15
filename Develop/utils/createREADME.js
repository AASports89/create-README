//******************************************************** GENERATE FILE *****************************************************//
  const fs = require('fs'); 

//FUNCTION - RETURNS A LICENSE BADGE - BASED ON THE LICENSE RETURNED//
//NO LICENSE = EMPTY STRING//
  function renderLicenseBadge(license) {
    if (data.license === "AGPL-3.0") {
    data.licenseBadge = "AGPL_v3";
    }
    if (data.license === "GPL-3.0") {
    data.licenseBadge = "GPLv3";
    }
    if (data.license === "ISC") {
      data.licenseBadge = "ISC";
    }
    if (data.license === "MIT") {
      data.licenseBadge = "MIT";
    }
    if (data.license === "MS-PL") {
    data.licenseBadge = "MS-PL";
    }
    if (data.license === "UNLICENSE") {
      data.licenseBadge = "UNLICENSE";
    }
    else {
    "";
    }
  } 

//FUNCTION - RETURNS LICENSE LINK//
//NO LICENSE = EMPTY STRING//
  function renderLicenseLink(license) {
    if (data.license === "AGPL-3.0") {
    data.licenseLink = "agpl-3.0";
    }
    if (data.license === "GPL-3.0") {
    data.licenseLink = "gpl-3.0";
    }
    if (data.license === "ISC") {
      data.licenseLink = "isc";
    }
    if (data.license === "MIT") {
      data.licenseLink = "mit";
    }
    if (data.license === "MS-PL") {
    data.licenseLink = "ms-pl";
    }
    if (data.license === "UNLICENSE") {
      data.licenseLink = "unlicense";
    }
    else {
    "";
    }
  }

//FUNCTION - RETURNS LICENSE SECTION - README//
//NO LICENSE = EMPTY STRING//
  function renderLicenseSection(license) {
    if (!data.license) {
    "";
    }
  }

//INTERPOL VARIABLES - ${<VARIABLES>} SYNTAX//
//FUNCTION - CREATE README//
  function generateREADME(data) {
  return `
  # ${data.title}

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