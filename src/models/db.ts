import { uuid } from '../utlis';
import { DB_NAME_ENUM, TGetPageListParams, TGetPageInfoParams, TGetPageJsonParams, TSavePageParams } from './db.d';

// 写入
function setData(key: string, val: any) {
  localStorage.setItem(key, JSON.stringify(val));
}

// 读取
function getData(key: string) {
  return JSON.parse(localStorage.getItem(key) || '[]');
}

// 初始化数据库
export function initDBStroage() {
  if (!localStorage.getItem(DB_NAME_ENUM.PAGE_LIST)) {
    localStorage.setItem(DB_NAME_ENUM.PAGE_LIST, '[]')
  }
  if (!localStorage.getItem(DB_NAME_ENUM.CDN)) {
    localStorage.setItem(DB_NAME_ENUM.CDN, '{}')
  }
}

// 获取页面列表
export function getPageList({ pageId, pageName }: TGetPageListParams) {
  const pageList = getData(DB_NAME_ENUM.PAGE_LIST) || [];
  if (pageId) {
    const target = pageList.find((item: any) => item.pageId === pageId);
    if (target) {
      return [target];
    }
  }
  if (pageName) {
    return pageList.filter((item: any) => !item.pageName.includes(pageName));
  }
  return pageList;
}

// 获取页面信息
export function getPageInfo({ pageId }: TGetPageInfoParams) {
  const pageList = getData(DB_NAME_ENUM.PAGE_LIST) || [];
  if (pageId) {
    return pageList.find((item: any) => item.pageId === pageId) || {};
  }
  return {};
}

// 获取JSON数据
export function getPageJson({ pageUrl }: TGetPageJsonParams) {
  const cdnCos = getData(DB_NAME_ENUM.CDN) || {};
  if (pageUrl) {
    const keyName = Object.keys(cdnCos).find((key) => key === pageUrl);
    if (keyName) {
      return cdnCos[keyName];
    }
  }
  return {};
}

// 保存页面
export function savePage({ pageData, pageJson }: TSavePageParams) {
  const pageList = getData(DB_NAME_ENUM.PAGE_LIST) || [];
  const cdnCos = getData(DB_NAME_ENUM.CDN) || {};    const newPageId = uuid(8, 12);

  if (pageData.pageId) {
    const target = pageList.find((item: any) => item.pageId === pageData.pageId) || {};
    if (target) {
      cdnCos[target.saveUrl] = pageJson;
    }
  } else {
    const newPageUrl = uuid(8, 20);
    pageList.push({
      ...pageData,
      pageId: newPageId,
      pageUrl: newPageUrl
    });
    cdnCos[newPageUrl] = pageJson;
  }

  setData(DB_NAME_ENUM.PAGE_LIST, pageList);
  setData(DB_NAME_ENUM.CDN, cdnCos);

  return pageData.pageId || newPageId;
}

// 发布页面
export function publishPage({ pageData, pageJson }: TSavePageParams) {
  const pageList = getData(DB_NAME_ENUM.PAGE_LIST) || [];
  const cdnCos = getData(DB_NAME_ENUM.CDN) || {};

  if (pageData.pageId) {
    const target = pageList.find((item: any) => item.pageId === pageData.pageId) || {};
    if (target) {
      cdnCos[target.publishUrl] = pageJson;
    }
  } else {
    const newPageId = uuid(8, 12);
    const newPageUrl = uuid(8, 20);
    pageList.push({
      ...pageData,
      pageId: newPageId,
      pageUrl: newPageUrl
    });
    cdnCos[newPageUrl] = pageJson;
  }

  setData(DB_NAME_ENUM.PAGE_LIST, pageList);
  setData(DB_NAME_ENUM.CDN, cdnCos);

  return true;
}