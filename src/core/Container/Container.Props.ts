import { BaseProps } from '../PropTypes';
import { Container } from './Container';

export interface ContainerProps extends BaseProps<Container> {
  fluid?: boolean;
}

export const containerisProps = [
  'fluid',
];
