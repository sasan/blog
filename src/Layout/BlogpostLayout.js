import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export const query = graphql`
query($slug:String!){  
        wpPost(slug: {eq: $slug}) {
          title
          content
          featuredImage{
                  node{
                      sourceUrl
            }
          }
            categories{
                  nodes{
                      name
            }
          }
        }
}
`;

const BlogpostLayout = ({ data }) => {
    const post = data.wpPost;
    return (
        <div>
            <SEO
             title={post.title}
             description={post.description}
             image={post.featuredImage.node.sourceUrl}
             keywords={post.categories.nodes.map(res => res.name).join(",")} />
            <Header />
            <div className="container">
                <div className="p-5">
                    <div className="row justify-content-md-center">
                        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogpostLayout;