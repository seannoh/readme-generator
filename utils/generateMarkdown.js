// returns link to correct license badge
function renderLicenseBadge(license) {
  switch(license){
    case "MIT License":
      return "[![MIT License](https://img.shields.io/badge/License-MIT-green)](#license)";
    case "Apache License 2.0":
      return "[![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue)](#license)";
    case "GNU GPLv3":
      return "[![GNU GPLv3](https://img.shields.io/badge/License-GNU%20GPLv3-blue)](#license)";
    case "ISC License":
      return "[![ISC License](https://img.shields.io/badge/License-ISC-blue)](#license)";
    case "No License":
      return "";
    default:
      return "";
  }
}

// returns link to license section
function renderLicenseLink(license) {
  return "stub";
}

// returns the text for the correct license
function renderLicenseSection(license) {
  return "stub";
}

// generates markdown for the README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description 
${data.description}

${data.deployedLink ? `Deployed Link: ${data.deployedLink}` : ""}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)


## Installation
${data.installation}

## Usage 
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

${(data.username || data.email) ? "## Questions" : ""}
${(data.username) ? `View my Github [profile](https://github.com/${data.username}`: ""}
${(data.email) ? `Contact me at my [email](https://github.com/${data.email}`: ""}

`;
}

module.exports = generateMarkdown;
