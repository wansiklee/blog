import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

interface Items {
  [key: string]: string
}

interface IPost {
  getAll(fields: Array<string>): Array<Items>
}

export default class Post implements IPost {
  private getDirectory() {
    return join(process.cwd(), '_posts')
  }

  private getSlugs() {
    return fs.readdirSync(this.getDirectory())
  }

  private getBySlug(slug: string, fields: Array<string> = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(this.getDirectory(), `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items: Items = {}

    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug
      }
      if (field === 'content') {
        items[field] = content
      }

      if (data[field]) {
        items[field] = data[field]
      }
    })

    return items
  }

  getAll(fields: Array<string> = []) {
    const slugs = this.getSlugs()
    const posts = slugs
      .map((slug) => this.getBySlug(slug, fields))
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
  }
}
