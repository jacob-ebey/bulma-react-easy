import * as React from 'react';

export { FontAwesomeIcon } from './FontAwesomeIcon';

export type HelperClass = 'is-clearfix' | 'is-pulled-left' | 'is-pulled-right' |
  'is-overlay' | 'is-fullwidth' | 'has-text-centered' | 'has-text-left' | 'has-text-right' |
  'is-marginless' | 'is-paddingless' | 'is-unselectable' | 'is-hidden';

type KVPType = { [key: string]: any };

export interface BaseProps<T> extends React.Props<T>, KVPType {
  helper?: HelperClass | HelperClass[];
  style?: React.CSSProperties;
  className?: string;
}

export const getClassName = <T>(
  classNames: string[],
  props: BaseProps<T>,
  isKeys?: string[],
  hasKeys?: string[],
) => {
  let helperClass = '';

  if (props !== undefined && props.className !== undefined) {
    helperClass = props.className;
  }

  if (props !== undefined && props.helper !== undefined) {
    helperClass = `${helperClass} ${Array.isArray(props.helper) ? props.helper.join(' ') : props.helper}`;
  }

  return [
    ...classNames || [],
    helperClass,
    ...getIsClasses(isKeys, props),
    ...getHasClasses(hasKeys, props),
  ].join(' ');
};

const getIsClasses = (isKeys?: string[], props?: { [key: string]: any }): string[] => {
  const results: string[] = [];

  if (isKeys !== undefined && props !== undefined) {
    isKeys.forEach((key: string) => {
      if (key in props) {
        if (Array.isArray(props[key])) {
          props[key].forEach((option: string) => {
            results.push(`is-${option}`);
          });
        } else if (typeof props[key] === 'boolean') {
          results.push(`is-${key}`);
        } else {
          results.push(`is-${props[key]}`);
        }
      }
    });

    return results;
  }

  return [];
};

const getHasClasses = (hasKeys?: string[], props?: { [key: string]: any }) => {
  const results: string[] = [];

  if (hasKeys !== undefined && props !== undefined) {
    hasKeys.forEach((key: string) => {
      if (key in props) {
        if (Array.isArray(props[key])) {
          props[key].forEach((option: string) => {
            results.push(`has-${option}`);
          });
        } else if (typeof props[key] === 'boolean') {
          results.push(`has-${key}`);
        } else {
          results.push(`has-${props[key]}`);
        }
      }
    });

    return results;
  }

  return [];
};
