# Nested Routes
Add any necessary nested routes to the <User /> and <UserPosts /> components.
Also update any links to make sure they use the URL from the nearest parent Route.

https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/450631f37500fc6832eb3d46c9a47000-assessment.gif

No need to change <App />, <Users /> or <UserProfile />

Use this starter code for the application. You will, of course, need to add appropriate logic to make the application work.

## Specific Instructions
- No need to add ```<Router>```, it has been added to index.js
- Please do not remove the data-testid={...} attributes as they are used by the tests.
- / displays Users
- /users/:userId displays User and UserProfile
- "Profile" and "Posts" links use the Route URL
- /users/:userId/posts displays User and UserPosts
- Links to posts should use the Route URL
- /users/:userId/posts/:postId displays User UserPosts, UserPost