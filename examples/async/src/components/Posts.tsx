import * as React from 'react'

export interface PostsProps {
    posts: (Post)[];
}

export interface Post {
    title: string
}

const Posts = ({posts} : PostsProps) => (
  <ul>
    {posts.map((post, i) =>
      <li key={i}>{post.title}</li>
    )}
  </ul>
)


export default Posts
