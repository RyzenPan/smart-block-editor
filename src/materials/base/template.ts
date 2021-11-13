import ImageRange from './ImageRange/template';

const basicTemplate = [ImageRange];
const BasicTemplate = basicTemplate.map((v) => {
  return { ...v, category: 'base' };
});

export default BasicTemplate;