const fetch = require('isomorphic-fetch');
// const { createRemoteFileNode } = require('gatsby-source-filesystem');


async function fetchCountriesAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest
}) {
  // 1. Fetch a list of flags
  const res = await fetch(`https://restcountries.eu/rest/v2/all`);
  const countries = await res.json();
  
  // 2. Loop over each one
  for (const country of countries) {
    // create a node for each flag
    const nodeMeta = {
      id: createNodeId(`country-${country.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'Country',
        mediaType: 'application/json',
        contentDigest: createContentDigest(country)
      },
    }

    // 3. Create a node for that flag
    actions.createNode({
      ...country,
      ...nodeMeta
    });
  }
  
}

exports.sourceNodes = async (params) => {
  await Promise.all([fetchCountriesAndTurnIntoNodes(params)])
}

// exports.onCreateNode = async ({
//   node,
//   actions: { createNode },
//   createNodeId,
//   getCache,
// }) => {
//   if (node.internal.type === 'Country') {
//     const fileNode = await createRemoteFileNode({
//       url: node.flag,
//       parentNodeId: node.id,
//       createNode,
//       createNodeId,
//       getCache,
//     });
//     if (fileNode) {
//       node.remoteImage__NODE = fileNode.id;
//     }
//   }
// }