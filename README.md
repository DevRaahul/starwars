Tech stack used:-
React, Typescript, Shadcn, Tailwind CSS, Vite, React testing library, Jest

How to start App -

1. clone the repository to the local
2. install dependancies (npm install) in root folder
3. run the project (npm run dev)

What has been implemented:-
List view with name, gender, and planet.
Favourite list view with name, gender, and planet.
Character info card with option for adding character to favourite list.
Pagination for the list.
Cached data for the list pagination.
Added search option by character name (exact name search can be added).
Added redux store to save fetched data.
Made the table responsive as per screen size.
Added skeleton loaders.
Added Dummy Image avatar using UI-Placeholder API.

Search mechanism:-
For implementing search, I had two options for the dataset, which are
i) Consider the current page records only.
ii) Consider all data records fetched till now.
I opt for the second option as it gives more records to choose from.

What is remaining:-
Not able to get the spaceship name as per characters (there is no direct way to fetch data).
better mechanism to do error handling.

What should have been added:-
Wanted to add functionality to remove the ongoing fetch api call on pagination clicks
Wanted to add a caching mechanism for planets.

Problem faced:-
The API endpoint sometimes takes too much time to fetch a response.
The API for personal details was failing sometimes.
The app was getting disconnected sometimes on a Windows machine. I think the issue is with the Vite config after the latest update; it needs further debugging.
