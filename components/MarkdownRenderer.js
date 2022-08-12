import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";

function renderOptions(links) {
  // create an asset map
  const assetMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return (
          <Image src={asset.url} alt="My image alt text" width='100px' height='100px'/>
        );
      },
    },
  };
}

// Render post.body.json to the DOM using
// documentToReactComponents from "@contentful/rich-text-react-renderer"

export default function BlogPost(props) {
  const { content } = props;

  return <>{documentToReactComponents(content.json, renderOptions(content.links))}</>;
}