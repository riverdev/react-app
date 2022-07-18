//Filename:  release.config.js
const { buildQueries } = require('@testing-library/react');

module.exports = {
  branches: 'develop',
  repositoryUrl: 'https://github.com/riverdev/react-app',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/github',
      {
        assets: [
          { path: 'build.zip', label: 'Build' },
          { path: 'coverage.zip', label: 'Coverage' },
        ],
      },
    ],
  ],
};
