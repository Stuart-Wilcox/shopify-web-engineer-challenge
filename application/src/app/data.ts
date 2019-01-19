export class Data {
  body: string;
  category: string;
  title: string;
  keywords: string;
  isFavourite: boolean;

  constructor(body: string, category: string, title: string, keywords: string){
    this.body = body;
    this.category = category;
    this.title = title;
    this.keywords = keywords;
    this.isFavourite = false;
  }

  getKeywords(): string[] {
    return this.keywords.split(' ');
  }

  match(query: string): boolean {
    return this.getKeywords().indexOf(query) !== -1;
  }
}
