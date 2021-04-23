import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import UserPost from "./UserPost";

export const UserPosts = ({ posts = [] }) => {
  const { url } = useRouteMatch();
  console.log(url);
  console.log(`${url}/posts/:postId`);

  const postLinks = posts.map((post) => (
    <li key={post.id}>
      <Link to={`${url}/${post.id}`} data-testid={`user-post-${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));

  // Display <UserPost /> if there is a :postId in the url, otherwise display "No post selected..."
  return (
    <div>
      <ul>{postLinks}</ul>
      <div>
        <Switch>
          <Route path={`${url}/:postId`}>
            <UserPost posts={posts}/>
          </Route>
          <Route path={`${url}/posts/`}>
            <p>No post selected</p>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default UserPosts;
