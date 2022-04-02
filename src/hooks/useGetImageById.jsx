import { useStaticQuery, graphql } from "gatsby"
const useGetImageById = id => {
  // SEARCH IMAGE QUERY BY ID --------
  const query = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp {
        edges {
          node {
            gatsbyImageData
            id
          }
        }
      }
    }
  `)
  //Mapping results from query and pushing it to an array
  const imageData = []
  query.allImageSharp.edges.map(node => imageData.push(node))

  //  filtering that new array in base an id
  const result = imageData.filter(obj => obj.node.id === id)
  return result[0].node.gatsbyImageData

  // SEARCH IMAGE QUERY BY ID ------------
}

export default useGetImageById
