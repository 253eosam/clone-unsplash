export interface IGetPhotos {
  total: number;
  total_pages: number;
  results: Result[];
}

interface Result {
  id: string
  height: number;
  urls: Urls;
  alt_description: string;
  width: number
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface IPictureItem {
  id: string
  fullUrl: string
  thumbUrl: string
  height: number
  width: number
  alt: string
}

export class PictureItem implements IPictureItem {
  id: string
  fullUrl: string
  thumbUrl: string
  height: number
  width: number
  alt: string

  constructor({ id, height, width, urls, alt_description }: Result) {
    this.id = id
    this.fullUrl = urls.full
    this.thumbUrl = urls.regular
    this.height = height
    this.width = width
    this.alt = alt_description
  }
}