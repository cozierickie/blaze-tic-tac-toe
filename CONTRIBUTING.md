# Contributing Guide

Welcome to the Web Tic Tac Toe project! We are excited to have you contribute. This guide outlines our branching strategy, commit strategy, and push/pull strategy to ensure smooth and efficient collaboration.

## Branching Strategy

We use a **feature-branch** workflow to keep our `main` branch stable and ready for production.

### Fork Source Repo
- Each team member forks the [source repository](https://github.com/blaze-alx/blaze-tic-tac-toe.git) to their own GitHub account.

### Clone the forked repository
- Each team member clones their forked repository to their local machine using `git clone https://github.com/<yourUsername>/blaze-tic-tac-toe.git`.

### Add the source repository as remote
- Each team member adds the source repository as a remote using `git remote add upstream https://github.com/blaze-alx/blaze-tic-tac-toe.git`.

### **Branches:**
- **`main`**: The stable branch that always contains production-ready code.
- **`feature/<feature-name>`**: Branches for individual features, prefixed with `feature/`.
- **`bugfix/<bug-name>`**: Branches for fixing bugs, prefixed with `bugfix/`.
- **`hotfix/<hotfix-name>`**: Branches for urgent fixes in production, prefixed with `hotfix/`.

### **Branching Process:**
1. **Create a Feature Branch**: 
   - Branch off from `main` using a descriptive name.
   - Example: `git checkout -b feature/socket-io-integration`, `git checkout -b bugfix/fix-database-error`.

2. **Work on Your Feature**:
   - Implement your feature or bugfix in the feature branch.
   - Keep your branch focused on a single feature or fix.

3. ** Make changes and commit:**
   - Team members make changes, commit them using `git commit -m "<commit-message>"`, and repeat as necessary.

4. ** Pull from Upstream:**
   - Before pushing changes, team members pull the latest changes from the source repository using `git pull upstream main`.

5. ** Rebase and resolve conflicts:**
   - Team members rebase their feature branch using `git rebase upstream/main` and resolve any conflicts that arise.

6. ** Push changes to forked repository:**
   - Team members push their changes to their forked repository using `git push origin <feature-branch-name>`.
     
7. **Create a pull request**:
   - Once the feature is complete and tested, team members create a pull request from their feature branch to the source repository's `main` branch.

8. **Review and merge**:
 - Request at least one team member to review your PR.
 - Only merge the PR after it has been reviewed and approved.
 - Squash and merge commits if necessary to keep the history clean

### Rebase Guide

   - `git rebase main` is a powerful command that allows you to reapply your local commits on top of the latest changes from the main branch. Here's what it does:
   - Temporarily removes your local commits
   - Fetches the latest changes from the main branch
   - Reapplies your local commits on top of the updated main branch
   This process helps to:
   - Keep a linear commit history
   - Avoid merge commits
   - Make your local changes appear as if they were made on top of the latest main branch changes
     
### Note:
   - If there are conflicts during the rebase, Git will pause and allow you to resolve them.
   - Once conflicts are resolved, use `git rebase --continue` to continue the rebase process.
   - If you want to abort the rebase, use `git rebase --abort`.
   Remember to always rebase safely by:
   - Making sure you're on the correct branch (`git checkout <your-branch>`)
   - Committing or stashing any local changes before rebasing
   - Being aware of any potential conflicts or changes that may occur during the rebase process.

## Commit Strategy

### **Types of Changes:**
- **`feat:`** A new feature.
- **`fix:`** A bug fix.
- **`docs:`** Documentation updates.
- **`style:`** Code style changes (formatting, etc.).
- **`refactor:`** Code refactoring without changing functionality.
- **`test:`** Adding or updating tests.
- **`chore:`** Maintenance tasks (updating dependencies, etc.).

### **Commit Best Practices:**
- **Atomic Commits**: Make small, self-contained commits that do one thing.
- **Write Clear Messages**: Clearly explain the intent of the commit.
- **Use Present Tense**: Write commit messages in the present tense (e.g., "Add feature" instead of "Added feature").
We follow a **consistent commit message format** to maintain clear and informative commit history.

### **Commit Message Format:**
- **Type of Change**: A short description of the change, followed by a more detailed explanation if necessary.
- **Example**:
- feat: Implement Socket.IO for real-time game updates
- fix: Resolve issue with database connection timeout
- docs: Update README with setup instructions

## Final Notes

- **Communication is Key**: Use our communication platform to discuss any issues, blockers, or significant changes.
- **Stay Updated**: Regularly sync your branches with the latest changes from `dev` to avoid large merge conflicts.
- **Ask for Help**: If you're unsure about anything, don't hesitate to reach out to the team.

Thank you for contributing to the Web Tic Tac Toe project! Let's build something amazing together.
