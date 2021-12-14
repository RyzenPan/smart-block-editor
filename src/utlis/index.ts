
// 生成uuid
export function uuid(len: number, radix: number) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const uuid = [];
  let i;
  radix = radix || chars.length;

  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    let r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        // eslint-disable-next-line no-bitwise
        r = 0 | (Math.random() * 16);
        // eslint-disable-next-line no-bitwise
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join('');
}

// 是否处在编辑器中
export const isEditorMode = () => {
  const query = window?.location?.href;
  if (typeof query === 'string' && query.indexOf('editor') !== -1) {
    return true;
  }
  return false;
};

// 转换内联样式像素
const vw = window.innerWidth;
export const pxTransform = (size: number, designWidth = 375) => {
  const multiply = designWidth / vw;
  return isEditorMode() ? size : `${(size / multiply).toFixed(2)}`;
};

// 获取用户自定义样式
export const getCustomStyle = (data: any) => {
  let customStyleStr = ''
  Object.keys(data).forEach((key: string) => {
    const value = data[key];
    switch (key) {
      case 'textColor':
        customStyleStr += `color: ${value};`;
        break;
      case 'fontSize':
        customStyleStr += `font-size: ${pxTransform(value)}px;`;
        break;
      case 'textAlign':
        customStyleStr += `text-align: ${value};`;
        break;
      case 'lineHeight':
        customStyleStr += value > 0 ? `line-height: ${pxTransform(value)}px;` : '';
        break;
      case 'fontWeight':
        customStyleStr += `font-weight: ${value};`;
        break;
      case 'bgColor':
        customStyleStr += `background: ${value};`;
        break;
      case 'bgRadius':
        customStyleStr += `border-radius: ${value}px;`;
        break;
      case 'space':
        const valueArr = value.split(' ');
        customStyleStr += valueArr.length >= 2 ? `padding: ${valueArr[0]}px ${valueArr[1]}px;` : `padding: ${valueArr[0]}px;`;
        break;
      default:
        break;
    }
  })
  return customStyleStr;
}