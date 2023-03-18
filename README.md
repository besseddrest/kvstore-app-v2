# KVStore App 2.0 (WIP)

A re-creation of the KVStore App that I built for Data Engineering at Pinterest. This time, with a better understanding of React/Typescript, and a sprinkle of other technologies that I have been interested in learning.

I regularly mention this project in interviews but since I'm no longer with Pinterest I don't really have anything to show for it, so I thought it would be fun to make an improved version of it that I could share publicly on github.

I consider the original version as one of the projects that I'm most proud of in my career as a Software Engineer, but not because it has groundbreaking features, or because it's an example of some of my best coding. It actually has neither of those things. The KVStore App is just a simple tool that was used daily by so many excellent engineers across several teams. It turned a bad process into a good one.

## Background
Generally speaking, the app is just a request form that would submit to a queue of requests, grouped by user (admin users had full visibility). It was built for both the KV Systems team and any Pinterest engineer who required key-value storage. A customer could submit a request for a dataset providing metadata related to the specific use case. An admin (KV Systems engineer) could then review the request and assign the appropriate status (e.g. completed, in progress, rejected). 

The app provided the following main benefits:
* it ended the use of JIRA tickets as a way for requesting datasets - JIRA is text-based, and an organizational nightmare! Which, drastically improved the next item:
* **VISIBILITY** - the customer could see their history of requests, the admins could see the mountain of work before them. NO MORE SEARCHING ON JIRA!
* it gave the KV Systems team a more efficient way to lookup dataset metadata, because it was finally stored in a db
* it allowed KV Systems to use internal tooling to expedite our daily tasks - dataset creation, backups, data uploads - all used the metadata submitted by the customers
* it helped streamline the process of migrating datasets from several different legacy key-value storage systems to our new unified service (KVStore Service) at Pinterest.

## Differences
In this version of the KVStore App:
* I decided to go with React Hooks Form (so I can learn something new) instead of Formik, which doesn't seem to be maintained lately
* This will not use Gestalt, which is Pinterests UI component library. Maybe Material UI?
* the original version used Redux, which, in hindsight, probably was overkill. No Redux.
* the components will be smaller, and easier for others to read
* it will use fake data
* it will contain unit tests
* Tailwind? Maybe for fun.

# My personal gripes with the original version
Just some things that I wish I had done better or fixed and will probably tackle in this version:
* the Queue did not update after a request submission, which required a browser refresh
* we built a separate UI app to display a datasets full metadata (whereas the focus of KVStore App was to handle requests for dataset creation). Would've been nice (and easy) to just combine the two
* no sorting of the queue, static table display
* tba...

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

