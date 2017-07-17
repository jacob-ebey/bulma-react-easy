import { BaseProps } from '../PropTypes';
import { Image } from './Image';

export type ImageSize =
  '16x16' |
  '24x24' |
  '32x32' |
  '48x48' |
  '64x64' |
  '96x96' |
  '128x128' |
  'square'|
  '4by3' |
  '3by2' |
  '16by9'|
  '2by1';

export interface ImageProps extends BaseProps<Image>{
    size: ImageSize;
    src: string
}

