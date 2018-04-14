## Job listing website

### Overview

This is a test given to me to showcase my knowladge on react js. The idea is to create a job listing website, data for this website is coming from an API (since this API does not support CORS i have created a json mock data object for the time being). I have implemented Redux architecture and reduce the use of internal state as much as possible to keep application state at one place. I have structured the project in a way that we can have many reusable components.

### Propject Setup

- Clone the project from `https://github.com/deegha/job-listing.git` 
- Navigate in to the project and run `npm install` to install dependancies
- Run `npm start` to start the project in port `3000`

### Technologies used

- React
- React redux
- scss
- Create react app (for the dev server and project initilization)

### Special notes to Lio (important)

- I have written a backend client to fetch the data from an API but since the api does not suport CORS and the api blocks me, i have returned a new promise of mock data object form the backend client
- Since i have not tested the resulting data obejct from the api im not sure if this data object is similar to my mock object(have to check once the api is up and running).
- You needed me to show a modal on the screen 3, to see this, 
  - click on read more on a job
  - once you are on the single job page click on the company logo