# :purple_circle: *Feminism Quiz* :purple_circle:

Feminism Quiz is an educational and informative site with questions about the history and milestones of feminist movements in Germany. Users can assess their knowledge and fill gaps in their understanding while enjoying a game.

HERE SCREENSHOTS OF DEPLOYED SITE FOR VARIOUS SCREEN SIZES

💜 The deployed page can be found [here](https://zabokaa.github.io/FeminismQuiz/) ✊

## Table of Contents

- [Objective](#objective)
- [Key Features](#key-features)
- [User Stories](#user-stories)
- [UX Design](#ux-design)
- [Testing](#testing)
  - [Manual](#manual)
  - [Official Validators](#official-validators)
  - [Bugs](#bugs)
- [Technologies](#technologies)
- [Deployment](#deployment)
- [Project Status](#project-status)
- [Acknowledgements](#acknowledgements)

## Objective

- Hands-on learning JavaScript basics by building an interactive front-end application
- To offer a stimulating quiz experience that entertains online users
- Users visiting the site aim to engage in an online quiz to evaluate their general or specific knowledge about women's history in Germany

## Key Features

- Start Page

- User Login and Start Quiz

  ![username](./assets/img/username.png)

- Quiz Section

  ![quizValidation](./assets/img/questionIncorrect.png)

- End of Game Round --> Score and Play again

  ![endQuiz](./assets/img/score.png)

## User Stories

## UX Design

## Testing

### Manual

### Official Validators

- [W3C HTML Validator](./assets/img/htmlVal.png): No errors
- [W3C CSS Validator](./assets/img/CSSvalidator.png):  No errors
- [Lighthouse Chrome DevTools](./assets/img/lighthouseVal.png): Accessibility 100
- [WAVE](./assets/img/WAVEval.png): No errors for accessibility and color contrast

### Bugs

- When a user wants to restart the game the shuffle funcion was not called. I fixed the bug by moving `randomize(questions);` to the `openQuiz()` function.

## Technologies

JavaScript | HTML | CSS

## Project Status

Project is: finished

## Deployment

- The site is deployed on Github Pages.

  HOW TO:

  1. **Go to Repository Settings:**
     In your GitHub repository, navigate to the "Settings" tab.
  
  2. **Scroll Down to GitHub Pages Section:**
     In the Settings, scroll down to the "GitHub Pages" section.
  
  3. **Choose Your Source Branch:**
     Under "Source," select the branch you want to use for GitHub Pages (e.g., `main`).
  
  4. **Save Your Changes:**
     Save the changes. GitHub Pages will provide you with a link to your deployed site.
  
  5. **Wait for the Build:**
     GitHub Pages will now build and deploy your site. Wait for the process to complete.
  
  6. **Access Your Deployed Site:**
     Once the build is successful, you can access your deployed site using the provided link.

  Your project is now live on GitHub Pages!

## Acknowledgements

This project was based on full-stack course @ Code Institute.

Ideas for code snippets (commented in my code)

- W3School
- Web Dev Simplified
