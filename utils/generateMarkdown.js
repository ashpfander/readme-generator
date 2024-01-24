// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, data) {
  if (license === 'The Unlicense') {
    return '';
  } else {
    return `![License badge](https://img.shields.io/github/license/${data.github}/${data.repo})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'The Unlicense') {
    return '';
  } else {
    return '- [License](#license)';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, data) {
  if (license === 'The Unlicense') {
    return '';
  } else {
    return `## License

    ${data.license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license, data)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  ${renderLicenseLink(data.license)}
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ${renderLicenseSection(data.license, data)}

  ---

  ## Questions

  Any questions you may have, please feel free to reach out to me using either contact.
  GitHub Profile: https://github.com/${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
