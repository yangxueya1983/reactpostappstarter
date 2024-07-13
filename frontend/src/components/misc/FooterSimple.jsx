import { Container, Group, Anchor } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './FooterSimple.module.css';

const links = [
  { link: 'https://github.com/yangxueya1983', label: 'github' },
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
        <MantineLogo size={28} />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}

export default FooterSimple;pwd
