// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  let licenseLink ='';
  if(`${data.license}` === 'Apache License 2.0'){
    licenseOption = 'ApacheLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (`${data.license}` === 'MIT License') {
    licenseOption = 'MITLicense';
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };
  if(`${data.license} `=== 'None'){
    licenseOption = 'No license';
    licenseLink = '';
  };
  return `
  # ${data.title}

  
  ## Table of Contents
  
  *[Licensing](#Licensing)
  *[Description](#description)
  *[Installation](#Installation)
  *[Usage](#Usage)
  *[Contributions](#Contributions)
  *[Tests](#Tests)
  *[Questions](#Questions)

  ## Licensing:
 
  ![badge](https://img.shields.io/badge/license-${licenseOption}-brightorange)
  This application uses  ${data.license}.
  For more information please visit the [license description](${licenseLink}).

  ## Description
  ${data.description}

  ## Installation
  Follow these steps to properly install this application:
  ${data.installation}

  ## Usage 
  Instructions for use:
  ${data.usage}

  ## Contributions
  If you would like to contribute to this project, please follow these guidelines: 
  ${data.contributions}

  ## Tests 
  Instructions for testing this application:
  ${data.test}

  ## Questions
  Any questions please reach out via 
  *Github: https://github.com/${data.github}
  *Email: ${data.email}
`;
}

module.exports = generateMarkdown;