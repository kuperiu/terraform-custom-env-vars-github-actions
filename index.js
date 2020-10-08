const core = require('@actions/core');

const repoName = process.env.GITHUB_REPOSITORY.split('/');
const key = repoName[1] + '/' + sha + '.zip';

core.exportVariable('TF_KEY', sha);
core.info(`Set TF_KEY=` +
`${process.env.TF_KEY}`);