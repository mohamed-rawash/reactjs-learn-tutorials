import React from 'react'
import styles from "./ModuleStyleSheet.module.css"
function ModuleStyleSheet() {
  return (
    <div className={styles.parentCont}>
      <h1 className={styles.title}>ModuleStyleSheet</h1>
    </div>
  );
}

export default ModuleStyleSheet