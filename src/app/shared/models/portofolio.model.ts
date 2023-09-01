export interface portofolioDTO {
  id: number;
  categories: categoryDTO[];
  name: String;
  projectDate: String;
  country: String;
  images: string[];
}


export interface categoryDTO {
  id: number;
  name: String;
}

export interface PortofolioReducedDTO {
  id: number;
  image: string;
}

