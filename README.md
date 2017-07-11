# Simple HN Clone
## Functional requirements
- Maintain a list of topics and its upvotes/downvotes
- Allow the user to submit topics (string of <= 255 chars).
- Allow multiple upvotes or downvotes of topic.
- Always return a list of top 20 topics (sorted by upvotes, descending) on the homepage

## In-memory data structure for topics
For an actual HN app, a database or data store. Reddit uses Solr.
For this simple clone, with k=20, I can think of 2 more efficient methods:
### 1. Sorting everytime homepage is requested O(n log n)
Not feasible when n is large, but for this clone n will not get large enough for this to matter.

### 2. Tree/heap
Insertion into tree/heap and removal everytime topic is upvoted... 
- Tree: Average O(log n) insertion + O(log n) removal
- Heap: Average O(1) insertion + O(log n) removal (if we have direct pointer to that node we want to remove; otherwise it's O(n))
Extracting k highest nodes O(k log n) or actually even O(k * 1) everytime homepage is requested.

### Actual Implementation 
Sort array upon display of top 20, with JavaScript Array.prototype.sort().

# Project Structure
The project is separated into `./client`, which contains a Nuxt.js (framework for SSR Vue.js apps) app, and `./server`, which contains a Express REST API. Refer to the README's in the respective subfolders for details pertaining to each part.

# Hosting
[Nuxt.js app](https://simple-hn-app.herokuapp.com/) and [Express app](https://simple-hn-api.herokuapp.com/) hosted with Heroku.
