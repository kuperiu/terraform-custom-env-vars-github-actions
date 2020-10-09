const core = require('@actions/core');

const sha = process.env.GITHUB_SHA.substring(0,10);
const repoName = process.env.GITHUB_REPOSITORY.split('/');
const key = repoName[1] + '/' + sha + '.zip';

core.exportVariable('TF_VAR_key', key);
core.info(`Set TF_VAR_key=` +
`${process.env.TF_VAR_key}`);

