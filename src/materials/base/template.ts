import ImageRange from './ImageRange/template';
import Text from './Text/template';
import Swiper from './Swiper/template';
import Button from './Button/template';
import Coupon from './Coupon/template';

const basicTemplate = [ImageRange, Text, Swiper, Button, Coupon];
const BasicTemplate = basicTemplate.map((v) => {
  return { ...v, category: 'base' };
});

export default BasicTemplate;