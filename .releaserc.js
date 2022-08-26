module.exports = {
  "branches": [
    "master",
    "next",
    "next-major",
    "+([0-9])?(.{+([0-9]),x}).x",
    {
      "name": "beta",
      "prerelease": true
    },
    {
      "name": "alpha",
      "prerelease": true
    },
  ],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/npm",
      {
        "npmPublish": false,
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": [
          "package-lock.json",
          "package.json",
          "CHANGELOG.md"
        ],
        "message": "chore(🤖): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    "@semantic-release/github"
  ]
}
