import React from "react";
import { Container, Group, Anchor } from '@mantine/core';

import classes from './FooterSimple.module.css';

import SVGComponent from "./svgviewer-react-output";

const links = [
  { link: 'https://github.com/yangxueya1983', label: "Nancy's github" },
];

const FooterSimple = () => {
  const items = links.map((link) => (
    <Anchor
    c="dimmed" 
    key={link.label} 
    href={link.link} 
    onClick={(event) => event.preventDefault()}
    size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <SVGComponent width={50} height={50}/>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}

export default FooterSimple;
