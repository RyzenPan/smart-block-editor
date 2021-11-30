import ImageRange from './ImageRange/template';
import Text from './Text/template';

const basicTemplate = [ImageRange, Text];
const BasicTemplate = basicTemplate.map((v) => {
  return { ...v, category: 'base' };
});

export default BasicTemplate;