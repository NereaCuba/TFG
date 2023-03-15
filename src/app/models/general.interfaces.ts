export interface ArticleBasicInfo {
  id?: number;
  title?: string;
  briefing?: string;
  date?: string;
  image?: string;
}

export interface ArticlesResponse {
  articles?: Array<ArticleBasicInfo>;
  authors?: Array<Author>;
}

export interface Author {
  id?: number;
  name?: string;
  photo?: string;
}

export interface HeuristicsResponse {
  heuristic_abstract?: Array<HeuristicBasicInfo>;
}

export interface HeuristicBasicInfo {
  id?: string;
  name?: string;
  definition?: string;
  verification_list?: Array<string>;
  benefied_user?: string;
  weigth?: Weigth;
  brief?: string;
  example?: ExampleInfo;
}

export interface Weigth {
  id?: string;
  description?: string;
}

export interface ExampleInfo {
  image?: string;
  text?: Array<string>;
}