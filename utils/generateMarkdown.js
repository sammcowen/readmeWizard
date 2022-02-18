// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Licensing:
 [![license].(https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)

  ## Table of Contents
  -[Description](#description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Contributions](#Contributions)
  -[Tests](#Tests)
  -[Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Tests 
  ${data.test}

  ## Questions
  Any questions please reach out via 
  -Github: https://github.com/${data.github}
  -Email: ${data.email}
`;
}

module.exports = generateMarkdown;