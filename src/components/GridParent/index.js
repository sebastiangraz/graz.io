/** @jsxImportSource theme-ui */

import styles from "./style.module.scss";

export const GridParent = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={`${styles.gridParent} ${className}`}>
      {children}
    </div>
  );
};
