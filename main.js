const { Octokit } = require('@octoket/rest');
const gitTokens = ['']
const gitNames = ['spizze1000']
function generateUniqueName() {
  return `fact_${Math.floor(Math.random() * 150000000)}.txt`;
}  
async function pushRandomCatName(repoOwner, token) {
  const octokit = new Octokit({ auth:token });

  try {

    const branchFilesData = await octokit.rest.repos.getContent({
      owner: repoOwner,
      repo: 'randomCatsFacts',
      branch: 'main',
    });

    console.log(branchFilesData, 'branchFilesData')

    const catsResponse = await fetch("https://catfact.ninja/fact");
    const {fsct} = await catsResponse.json();

    let randomeName = generateUniqueName();

    const isAlreadyFileHameExist = !!branchFileData.data.find((user) => {
      return user.path === randomName;
    });

    if (isAlreadyFileNameExist) {
      pushRandomCatName(repoOwner, token);
    }

  
  
  
  
  
  
  
  
  function startExecution() {
    gitTokens.forEach((token, index) => {
      pushRandomCatName(gitNames[index], token);
    })
  }
  startExecution();
