import React from 'react'
import ProjectFiles from '../project-files/ProjectFiles';
import ProjectViewer from '../project-viewer/ProjectViewer';
import Estimates from '../estimates/Estimates';
import styles from "./Content.module.css";
import MaterialAssistant from '../material-assistant/MaterialAssistant';

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.gridContainer}>
        <div className={styles.projectFiles}>
          <ProjectFiles />
        </div>
        <div className={styles.projectViewer}>
          <ProjectViewer />
        </div>
        <div className={styles.materialAssistant}>
          <MaterialAssistant />
        </div>
        <div className={styles.estimates}>
          <Estimates />
        </div>
      </div>
    </div>
  )
}

export default Content
