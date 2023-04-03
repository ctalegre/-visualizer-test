import NextHead from 'next/head'

function Head (props) {
  return (
    <NextHead>
      <title>3d Room Configurator | Home</title>
      <meta itemProp='name' content={'3d Room configurator'} />
      {/* {description && <meta itemProp='description' content={description} />} */}
      {/* {image && <meta itemProp='image' content={image} />} */}
      <link
        rel='icon'
        href='https://estudiocactus.com/favicon/apple-touch-icon.png'
      />
    </NextHead>
  )
}

export default Head
