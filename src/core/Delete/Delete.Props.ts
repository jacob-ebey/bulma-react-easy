import { BaseProps } from '../PropTypes';
import { Delete } from './Delete';

export type DeleteSize = 'small' | 'medium' | 'large';

export type DeleteComponentType = 'a' | 'button';

export interface DeleteProps extends BaseProps<Delete> {
    size?: DeleteSize;
    component?: DeleteComponentType;
    href?: string;
    onClick?: () => void;

}

export const deleteIsProps: string[] = [ 
    'size'
]
