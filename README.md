# :purple_circle: *Feminism Quiz* :purple_circle:

Feminism Quiz is an educational and informative site with questions about the history and milestones of feminist movements in Germany. Users can assess their knowledge and fill gaps in their understanding while enjoying a game.

HERE SCREENSHOTS OF DEPLOYED SITE FOR VARIOUS SCREEN SIZES

💜 The deployed page can be found [here](https://zabokaa.github.io/FeminismQuiz/) ✊

## Table of Contents

- [Objective](#objective)
- [Key Features](#key-features)
- [User Stories](#user-stories)
- [UX Design Five Planes Method](#ux-design-five-planes-method)
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

## Testing

### Manual


  
### Official Validators

  - [W3C HTML Validator](./assets/img/xx): No errors 
  - [W3C CSS Validator](./assets/img/xx):  No errors
  - [Lighthouse Chrome DevTools](./assets/img/xx): Accessibility 100
  - [WAVE](./assets/img/xx): No errors for accessibility and color contrast


### Bugs

  - When a user wants to restart the game the shuffle funcion was not called. I fixed the bug by moving `randomize(questions);` to the `openQuiz()` function.
  - 