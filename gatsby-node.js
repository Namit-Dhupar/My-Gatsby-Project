const path = require('path');
/*This is a Node JS file where we aim to achieve the goal of extracting the filename from the markdown posts to form a URL */
//That is also called slug which can be extracted through the createNodeField function used below
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if(node.internal.type === 'Mdx')
    //console.log(JSON.stringify(node, undefined, 4)); is used to examin the object to extract all the following details
    {
        const slug = path.basename(node.fileAbsolutePath, '.md') //extracts the filename only from path like: gatsby, react
        //so that URL could become ../gatsby or ../react
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
        //Use the slug in the graphql query of blog.js
    }
}

/*API FOR GENERATING PAGE DYNAMICALLY (../Template/Blogpage.js) */
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    //the generated page will be render in Blogpage.js component
    const blogTemplate = path.resolve('./src/Template/Blogpage.js');
    const result  = await graphql(`
     query {
      allMdx {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    //Generting the actual URL for the dynamic page
    result.data.allMdx.edges.forEach((edge)=>{
        createPage({
            component: blogTemplate,
            path: `/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}