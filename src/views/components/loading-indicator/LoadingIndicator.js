import styles from './LoadingIndicator.css'

import React from 'react';
import classNames from 'classnames';
import { Loader } from 'semantic-ui-react';

export default function LoadingIndicator(props) {
  const {isActive = false } = props;
  const { className, children } = props;

  const cssClasses = classNames(className,  {
    [styles.wrapper]: isActive
  });

  return (
    <div className={cssClasses}>
      {isActive && (
        <div className={styles.loaderContainer}>
          <Loader conten='Loading' active={true} inverted={true} size='huge' />
        </div>
      )}
      {children}
    </div>
  )
}
