export enum DB_NAME_ENUM {
  PAGE_LIST = 'page_list',
  CDN = 'cdn_cos'
}

export type TGetPageListParams = {
  pageId: string;
  pageName: string;
}

export type TGetPageInfoParams = {
  pageId: string;
}

export type TGetPageJsonParams = {
  pageUrl: string;
}

export type TSavePageParams = {
  pageData: any;
  pageJson: any[];
}