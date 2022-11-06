import React from 'react'
import styles from  "./Footer.module.css";

type Props = {}

const Footer  = (props: Props) => {
  return (
    <footer className={styles.footer}>
        <span>React + TS Todo</span>@ 2022
    </footer>
  )
}

export { Footer };