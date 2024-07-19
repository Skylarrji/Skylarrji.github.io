import React from 'react';
import styles from './Navbar.module.css';

const MenuIcon = (props: any) => {
  return (
    <div {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor"
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </div>
  );
};

const CloseIcon = (props: any) => {
  return (
    <div {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </div>
  );
};

type NavbarContentProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const NavbarContent: React.FC<NavbarContentProps> = ({ children, style, ...rest }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className={open ? styles.open : styles.closed} {...rest}>
        <div className={styles.lgOnly}>
          <div className={styles.collapsable} style={style}>
            {children}
          </div>
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={styles.smOnly}
        >
          <MenuIcon
            style={{
              transform: 'translateX(90%)',
              marginTop: '0.75rem',
              color: '#000',
            }}
          />
        </div>
        <div className={styles.overlay} onClick={() => setOpen(false)}></div>
        <div className={styles.drawer}>
          <div className={styles.drawerContent}>
            <CloseIcon
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                margin: '1rem',
                color: '#000',
              }}
            />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

type NavbarProps = {
  handleScroll: (ref: React.RefObject<HTMLDivElement>) => void;
  refs: {
    aboutRef: React.RefObject<HTMLDivElement>;
    experienceRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    articlesRef: React.RefObject<HTMLDivElement>;
  };
};

export const Navbar: React.FC<NavbarProps> = ({ handleScroll, refs }) => {
  return (
    <div className={styles.navbar}>
      <a
        href="#home"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          padding: '1rem',
          fontSize: '24px',
          fontWeight: '660',
          textTransform: 'none',
          color: 'white',
        }}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <div className="bg-white rounded-full">
          <img className="w-12 h-12 p-2" src="/favicon.png" alt="Logo" />
        </div>
      </a>
      <NavbarContent style={{ flex: 1 }}>
        <a
          className={styles.navbarEntry}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to the top of the page
          }}
        >
          Home
        </a>
        <a
          className={styles.navbarEntry}
          onClick={(e) => {
            e.preventDefault();
            handleScroll(refs.aboutRef);
          }}
        >
          About
        </a>
        <a
          className={styles.navbarEntry}
          onClick={(e) => {
            e.preventDefault();
            handleScroll(refs.experienceRef);
          }}
        >
          Experience
        </a>
        <a
          className={styles.navbarEntry}
          onClick={(e) => {
            e.preventDefault();
            handleScroll(refs.projectsRef);
          }}
        >
          Projects
        </a>
        <a
          className={styles.navbarEntry}
          onClick={(e) => {
            e.preventDefault();
            handleScroll(refs.articlesRef);
          }}
        >
          Articles
        </a>
      </NavbarContent>
    </div>
  );
};

export default Navbar;
