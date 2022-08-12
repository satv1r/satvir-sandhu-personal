import Image from "next/image"
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export function RichTextAsset ({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id)

  if (asset?.url) {
    return <Image src={asset.url} layout="fill" alt={asset.description} />
  }

  return null
}


const customMarkdownOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
  },
})

export default function PostBody ({ content }) {
  return (
    <div>
      {documentToReactComponents(
        content.json,
        // customMarkdownOptions(content)
      )}
    </div>
  )
}
