import { BaseProps } from '../PropTypes';
import { Section } from './Section';

export type SectionSize = 'medium' | 'large';

export interface SectionProps extends BaseProps<Section> {
  size?: SectionSize;
}

export const sectionIsProps = [
  'size',
];
