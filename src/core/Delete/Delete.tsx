import * as React from 'react';
import { DeleteProps, deleteIsProps } from './Delete.Props';
import { getClassName } from '../PropTypes'

export class Delete extends React.Component<DeleteProps, {}> {

public render (){
    const {children, style, component, onClick, href } = this.props;
    const deleteProps = { 
        className : getClassName(['delete'], this.props, deleteIsProps),
        style,
        href,
        onClick,
    }

    return React.createElement(component || 'a', deleteProps, children)
}
}