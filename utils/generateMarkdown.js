// returns link to correct license badge
function renderLicenseBadge(license) {
  switch(license){
    case "MIT License":
      return "[![MIT License](https://img.shields.io/badge/License-MIT-green)](#license)";
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
