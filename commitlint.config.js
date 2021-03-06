const prefixes = ["web"]
const scopes = ["general", "cards"]
const _prefixed = scopes.map(s => prefixes.map(p => `${p}-${s}`))
const prefixed = [].concat.apply([], _prefixed)
const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 100],
    "type-enum": [
      2,
      "always",
      [
        // default types:
        "build",
        "ci",
        "chore",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
    "scope-enum": [2, "always", prefixed],
  },
}

module.exports = config
