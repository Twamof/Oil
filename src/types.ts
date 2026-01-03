export interface ProductSection {
  title: string;
  content: string;
}

export interface ProductData {
  name: string;
  subtitle: string;
  overview: ProductSection;
  features: ProductSection;
  contents: ProductSection;
  ingredients: ProductSection;
  dosage: ProductSection;
  usage: ProductSection;
  warning: ProductSection;
}

export interface SiteMetadata {
  siteName: string;
  description: string;
  product: ProductData;
}
