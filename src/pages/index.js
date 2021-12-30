import React from "react";
import Post from '../components/Post';
import PrimaryLayout from '../Layout/PrimaryLayout';
import { graphql } from "gatsby";

export const query = graphql`
{
  allWpPost {
    nodes {
      slug
      title
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
`

const Home = ({ data }) => {

  return (<PrimaryLayout col="col-xs-6">
    {data.allWpPost.nodes.map(node => (
      <Post
        image={node.featuredImage.node.sourceUrl}
        title={node.title}
        excerpt={node.excerpt}
        readMore={node.slug} />
    ))}

  </PrimaryLayout>);
}




export default Home;