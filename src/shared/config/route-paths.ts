export const PAGE_PATH = {
  root: '/',
  login: '/login',
  register: '/register',
  forgot: '/forgot-password',
  profile: '/profile',
  article: {
    articleURL: (articleURL: string) => `/article/${articleURL}`
  },
  category: {
    categoryURL: (categoryURL: string) => `/category/${categoryURL}`
  },
  page404: '/404'
}