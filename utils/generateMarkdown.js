// returns link to correct license badge
function renderLicenseBadge(license) {}

// returns link to license section
function renderLicenseLink(license) {}

// returns the text for the correct license
function renderLicenseSection(license) {}

// generates markdown for the README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description 

${data.description}

${data.deployedLink ? "Deployed Link: " + data.deployedLink : ""}

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


`;
}

module.exports = generateMarkdown;
