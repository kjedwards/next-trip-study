# NextTrip Case Study
*Authored By Kaylee Edwards*

## How to Run

**Local Development (run on `localhost:3000`):** `npm start`

**Build:** `npm build`

**Test**: `npm test`



## Architecture Decisions

This application was created using `create-react-app` with the Typescript template. 
React is a quick way to build prototypes, and Typescript means the coding style is fairly opinionated.

Testing is done with `@testing-library/react`. This was automatically installed by `create-react-app`. 
My other choice was `enzyme`, but I believe both are decent choices, so I didn't have much reason to change it.

I set up `eslint` with my preferred styling to make sure I am consistent and adhering to standards.

I chose `react-query` for this application not only because it was brought up in a previous interview and I want to try it, 
but also because after evaluating it against `redux` and `mobX`, this seems like it needs less setup. 
Especially considering that this is a single page application with extremely straightforward functionality and API interactions,
I felt this was the best way to go.


## Assumptions

