import * as React from 'react';
import { ImageProps } from './Image.Props'; 
import { getClassName } from '../PropTypes'

export class Image extends React.Component<ImageProps, {}>{
    public render(){
        const { src } = this.props;
        return(
            <figure className={getClassName(['image'], this.props, ['size'])}>
                <img src={ src } />
            </figure>
        );
    }
}