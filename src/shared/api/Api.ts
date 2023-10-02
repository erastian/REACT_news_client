export interface ArticleDTO {
  id: string,
  isPublished: boolean,
  title: string,
  url: string,
  description: string,
  cover: string,
  image: string,
  articleBody: string,
  authorID: string,
  categoryID: string,
  createdAt: string,
  updatedAt: string,
  category: {
    id: string,
    title: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  },
  _count: {
    comments: number,
  }
}