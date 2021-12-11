import ImageRange from './ImageRange/template';
import Text from './Text/template';
import Swiper from './Swiper/template';

const basicTemplate = [ImageRange, Text, Swiper];
const BasicTemplate = basicTemplate.map((v) => {
  return { ...v, category: 'base' };
});

export default BasicTemplate;