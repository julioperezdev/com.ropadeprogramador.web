export interface DesignContextInterface {
  designs: DesignByShop[]
  designSelected: DesignByDescription;
  availableSizeColor: Map<string, string[]>;
  getAllDesigns: () => Promise<void>
  getDesignByDescription: (getDesignByDescriptionRequest: GetDesignByDescriptionRequest) => Promise<void>

}

export interface DesignsByShopBase {
  data: DesignByShop[];
}

export interface DesignByShop {
  id: string;
  name: string;
  slug: string;
  store_slug: string;
  settings: DesignByShopSettings;
  tags: string[];
  date: string;
}

interface DesignByShopSettings {
  image: string;
  description: string;
}


export interface DesignByDescriptionBase {
  data: DesignByDescription;
}

export interface DesignByDescription {
  description?:string;
  designUrl?:string;
  has_back_design: boolean;
  is_active: boolean;
  product_data: DesignByDescriptionProduct;
}

interface DesignByDescriptionProduct {
  data: DesignByDescriptionProductData;
}

interface DesignByDescriptionProductData {
  price: number;
  price_with_back: number;
  earning: number;
  earning_with_back: number;
  active: boolean;
  settings: DesignByDescriptionProductDataSettings;
}

interface DesignByDescriptionProductDataSettings {
  colors: DesignByDescriptionProductDataSettingsColors;
}

interface DesignByDescriptionProductDataSettingsColors {
  complete_colors: string[];
  colors: Object;
}

export interface GetDesignByDescriptionRequest{
  description: string;
  designUrl:string;

}