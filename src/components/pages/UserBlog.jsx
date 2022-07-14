import React from "react";
import { useParams } from "react-router-dom";

import { Default } from "../templates";
import { UserBio, PostListWrapper } from "../molecules";

export default function UserBlog() {
  const { userId } = useParams();

  const [posts, setPosts] = React.useState([]);
  const [user, setUser] = React.useState({
    avatar: "",
    bio: "",
    fn: "",
    ln: "",
  });

  React.useEffect(() => {
    fetch(`https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data[0].userData);
        setPosts(data);
      });
  }, []);

  return (
    <Default>
      <div className="user-blog-screen">
        <UserBio
          avatar={user.avatar}
          bio={user.bio}
          name={`${user.fn} ${user.ln}`}
        />
        <PostListWrapper posts={posts} />
      </div>
    </Default>
  );
}
