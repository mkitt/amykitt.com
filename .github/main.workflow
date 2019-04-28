workflow "Push Workflow" {
  on = "push"
  resolves = ["master", "Build"]
}

action "Install" {
  uses = "docker://node:11"
  runs = "yarn"
  args = "install"
}

action "TS Check" {
  needs = "Install"
  uses = "docker://node:11"
  runs = "yarn"
  args = "tsc"
}

action "Lint" {
  needs = "Install"
  uses = "docker://node:11"
  runs = "yarn"
  args = "lint"
}

action "Test" {
  needs = "Install"
  uses = "docker://node:11"
  runs = "yarn"
  args = "test"
  env = {
    CI = "1"
  }
}

action "master" {
  needs = ["TS Check", "Lint", "Test"]
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Build" {
  needs = ["master"]
  uses = "docker://node:11"
  runs = "yarn"
  args = "build"
  env = {
    CI = "1"
  }
}

/* action "Publish" { */
/*   needs = ["Build"] */
/*   uses = "netlify/actions/cli@master" */
/*   args = "deploy --prod --dir=build  --message=$GITHUB_SHA" */
/*   secrets = ["NETLIFY_AUTH_TOKEN", "NETLIFY_SITE_ID"] */
/* } */

workflow "Branch Cleanup Workflow" {
  on = "pull_request"
  resolves = ["Branch Cleanup"]
}

action "Branch Cleanup" {
  uses = "jessfraz/branch-cleanup-action@master"
  secrets = ["GITHUB_TOKEN"]
}

