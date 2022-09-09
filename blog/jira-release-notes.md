---
title: "Automated JIRA release notes"
date: 2020-08-16
author: Patrick
tags: ['automation']
---
This is my submission to the [#ActionsHackathon](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn). It is a github action designed to generate release notes based on commit messages.

### My Workflow

My tendency to get tunnel vision when working has often led me to lose track of events happening in my team. The number of projects and repos being large, keeping track of release cycles had me worried.

I built the [`patrixr/jira-release-notes`](https://github.com/marketplace/actions/jira-release-notes) action with the intent of being notified by email whenever one of our (many) apps got released.

It works as follows:

- It **compares** two git refs and reads all the new commits (typically when a pull request is merged)
- It finds JIRA ticket references in the commit messages (e.g ABC-123)
- Using jira credentials, it will retrieve the ticket info
- It will generate release notes in Markdown based on those tickets

The available outputs are:

- **PDF** - The action will always generate a pdf file
- **Email** - Optional - If provided with a Sendgrid key and recipients, will forward the notes via email


### Submission Category: 

- DIY Deployments


### Yaml File or Link to Code

For details, head over to the [github repo](https://github.com/patrixr/jira-release-notes)

You can also find it on the [Marketplace](https://github.com/marketplace/actions/jira-release-notes)


Usage example

```yaml
name: Forward release notes

on:
  pull_request:
    types: [closed]
    branches:
      - live

jobs:
  release-notes:
    runs-on: ubuntu-latest
    if: github.event.pull_request.merged == true
    steps:
    - uses: actions/checkout@v2
    - name: Generate and email notes
      uses: actions/jira-release-notes@v1.0.1
      id: pdf_generator
      with:
        head: ${{github.event.pull_request.head.sha}}
        base: ${{github.event.pull_request.base.sha}}
        jira-code: 'ABC'
        jira-host: jira.mycompany.org
        jira-username: ${{secrets.jira_username}}
        jira-password: ${{secrets.jira_password}}
        email-to: 'john@mycompany.org,jane@mycompany.org'
        sendgrid-api-key: ${{secrets.sendgrid_api_key}}
        app-name: 'My Awesome Service'
        unshallow: true
    - name: Process the pdf
      run: echo "The generated pdf was ${{ steps.pdf_generator.outputs.pdf }}"
        
```

### Additional Resources / Info

We have been using this tool within the [Goodcity Project](https://www.goodcity.hk), a system designed to gather, managed and distribute donations. The project lives under the umbrella of the non-profit [Crossroads Foundation](https://crossroads.org.hk). Our work is available on [github](https://github.com/crossroads).

### Ideas for improvement

- Multiple email service support
- Custom Markdown template for email/pdf structure
- Support for other project management platforms

Feel free to reach out for any issue or suggestions :)


Happy coding everyone !

Cheers !
