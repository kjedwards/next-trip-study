# NextTrip Case Study
*Authored By Kaylee Edwards*

## How to Run

**Local Development (run on `localhost:3000`):** `npm start`

**Build:** `npm build`

**Test**: `npm test`

## How to access via the web 

https://next-trip-study.herokuapp.com/

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

For the options, I chose `react-select`. In my experience, it has been quite a robust option. It allows for searchable options
as well as async.


## Assumptions

Upon getting stop data from the API, the `stops` array only contains one element.


## Known Issues

If you change the dropdowns in the wrong order, strange behavior can occur.

After selecting all three drop downs, the page routes to a page with the ids in the url. Upon hitting the back button, it loops back into navigating to the page with the ids.

Styles aren't mobile friendly

Lacking accessibility feature of a skip navigation button

All of these are things that I know how to fix, but I ran out of time.
