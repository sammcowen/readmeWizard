// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseOption =` ${data.license}`;
  let licenseLink ='';
  if(licenseOption=== 'Apache License 2.0'){
    licenseOption = 'ApacheLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (licenseOption === 'MIT License') {
    licenseOption = 'MITLicense';
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };
  if(licenseOption=== 'None'){
    licenseOption = 'No license';
    licenseLink = '';

  }
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
 
  ![badge](https://img.shields.io/badge/license-${licenseOption}-pink)
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
  Instructions for testing this applcation:
  ${data.test}

  ## Questions
  Any questions please reach out via 
  *Github: https://github.com/${data.github}
  *Email: ${data.email}
`;
}

module.exports = generateMarkdown;