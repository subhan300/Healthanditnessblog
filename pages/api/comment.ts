
const space=process.env.NEXT_CONTENTFUL_SPACE_ID
const accessToken=process.env.NEXT_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken:accessToken,
})

export async function fetchEntries() {

  const entries = await client.getEntries()
 
  if (entries.items) return entries.items
  console.log(`Error getting Entries for .`)
}
export async function getSingleBlogPost(slug) {


  const entry = await client.getEntries({
    content_type: 'healthblogging',
    limit: 1,
    'fields.slug[in]': slug,
  });

  return entry?.items?.map(item =>{
    const fields = item.fields
    return {
      title: fields.title,
      slug: fields.slug,
      content: fields.content,
      description:fields.description,
      metaTags:fields.metaTags,
      blogCardImage:fields.blogCardImage
    };
  })[0];
}
export default { fetchEntries ,getSingleBlogPost}