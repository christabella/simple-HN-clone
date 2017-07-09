# Simple HN Clone
## Functional requirements
- Maintain a list of topics and its upvotes/downvotes
- Allow the user to submit topics (string of <= 255 chars).
- Allow multiple upvotes or downvotes of topic.
- Always return a list of top 20 topics (sorted by upvotes, descending) on the homepage

## Implementation
### In-memory data structure for topics
For an actual HN app, a db.
For this, since k=20 is fixed, we can do:
- Sorting everytime homepage is requested O(n log n)
Not feasible when n is large
- Insertion into tree/heap everytime topic is upvoted -- O(log n), but actually O(1) on average for heaps -- and extracting k highest nodes O(k log n) to display on homepage.

# Project Structure
The project is separated into `./client`, which contains the Nuxt.js app, and `./server`, which contains the Express REST API. Refer to the README's in the respective subfolders for details pertaining to each part.

# Hosting
`nuxt generate`'d static site hosted with Netlify, and Express app hosted with Heroku.
