interface ErrorProps {
  error: Error;
  reset: () => void;
}

type ProductType = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  handle: string;
  tags: string;
};

interface ShopifyCollection {
  id: number;
  handle: string;
  title: string;
  updated_at: string;
  body_html: string;
  published_at: string;
  sort_order: string;
  template_suffix: string;
  disjunctive: boolean;
  rules: CollectionRule[];
  published_scope: string;
  admin_graphql_api_id: string;
}

interface CollectionRule {
  column: string;
  relation: string;
  condition: string;
}