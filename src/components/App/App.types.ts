export interface Image {
    id: string;
    alt_description: string | null;
    urls: {
      small: string;
      regular: string;
      [key: string]: string;
    };
    downloads: number;
    views: number;
  }
  
  export interface FetchImagesResponse {
    results: Image[];
    total_pages: number;
  }
  