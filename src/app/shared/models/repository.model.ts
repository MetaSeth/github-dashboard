export interface Repository {
  name: string;
  language: string;
  stars: number;
  description: string;
  creationDate: Date;
  updateDate: Date;
  url: string;
  [key: string]: any;
}
