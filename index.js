const core = require('@actions/core');

const sha = process.env.GITHUB_SHA.substring(0,10);
const repoName = process.env.GITHUB_REPOSITORY.split('/');
const key = repoName[1] + '/' + sha + '.zip';

core.exportVariable('TF_KEY', key);
core.info(`Set TF_KEY=` +
`${process.env.TF_KEY}`);