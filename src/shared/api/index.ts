import { Api, ContentType } from "./Api";


const newsApi = new Api<string>({
  baseApiParams: {
    header: {
      'Content-Type': ContentType.Json,
    },
    format: 'json'
  }
})

export { newsApi };