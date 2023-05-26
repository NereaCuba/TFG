export interface ArticleBasicInfo {
  id?: number;
  title?: string;
  briefing?: string;
  date?: string;
  image?: string;
  abstract?:  Array<string>;
  pdf?: string;
  authors?: string;
  year?: string;
  cita?: string;
  url?: string;
}

export interface ArticlesResponse {
  articles?: Array<ArticleBasicInfo>;
  authors?: Array<Author>;
}

export interface Author {
  id?: number;
  name?: string;
  photo?: string;
  mail?: string;
}

export interface HeuristicsResponse {
  heuristic_abstract?: Array<HeuristicBasicInfo>;
}

export interface HeuristicBasicInfo {
  id?: string;
  name?: string;
  full_name?: string;
  definition?: string;
  verification_list?: Array<string>;
  benefied_user?: string;
  weigth?: Weigth;
  brief?: string;
  example_images?: Array<ExampleInfo>;
  is_col_12?: boolean;
  forbidden_list?: Array<number>
  understand?: string;
  how_to_test?: string;
  examples?: Array<string>;
  extra?: string;
}

export interface Weigth {
  id?: string;
  description?: string;
}

export interface ExampleInfo {
  image?: string;
  text?: Array<string>;
  source?: string;
}