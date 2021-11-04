import React from 'react';
import styles from './Title.module.css';

type TitleProps = {
  text: string;
};

export default function Title({ text }: TitleProps): JSX.Element {
  return <h1 className={styles.h1}>{text}</h1>;
}
