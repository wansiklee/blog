export interface IAuthor {
  name: string
  picture: string
}

export interface IPost {
  slug: string
  title: string
  date: string
  coverImage: string
  category: string
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}
