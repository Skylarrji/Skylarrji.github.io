import React from 'react';
import styles from './Navbar.module.css';
import { useLocation } from 'react-router-dom';

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

const NavbarContent: React.FunctionComponent<any> = ({ children, ...rest }) => {
    let [open, setOpen] = React.useState(false);
    return (
        <>
            <div className={open ? styles.open : styles.closed} {...rest}>
                <div className={styles.lgOnly}>
                    <div className={styles.collapsable}>{children}</div>
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
                            color: '#000'
                        }}
                    />
                </div>
                <div
                    className={styles.overlay}
                    onClick={() => setOpen(false)}
                ></div>
                <div className={styles.drawer}>
                    <div className={styles.drawerContent}>
                        <CloseIcon
                            onClick={() => setOpen(false)}
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                margin: '1rem',
                                color: '#000'
                            }}
                        />
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export const Navbar: React.FunctionComponent<any> = ({}) => {
    const location = useLocation();
    return (
        <div className={styles.navbar}>
            <a
                href="/"
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
            >
                Skylar Ji
            </a>
            <NavbarContent style={{ flex: 1 }}>
                <a
                    className={styles.navbarEntry}
                    style={{
                        fontWeight:
                            location.pathname == '/' ? '800' : '600',
                    }}
                    href="/"
                >
                    Home
                </a>
                <a
                    className={styles.navbarEntry}
                    style={{
                        fontWeight:
                            location.pathname == '/#about' ? '800' : '600',
                    }}
                    href="/#about"
                >
                    About
                </a>
                <a
                    className={styles.navbarEntry}
                    style={{
                        fontWeight:
                            location.pathname == '/#experience' ? '800' : '600',
                    }}
                    href="/#experience"
                >
                    Experience
                </a>
                <a
                    className={styles.navbarEntry}
                    style={{
                        fontWeight:
                            location.pathname == '/#projects' ? '800' : '600',
                    }}
                    href="/#projects"
                >
                    Projects
                </a>
                <a
                    className={styles.navbarEntry}
                    style={{
                        fontWeight:
                            location.pathname == '/#articles' ? '800' : '600',
                    }}
                    href="/#articles"
                >
                    Articles
                </a>
            </NavbarContent>
        </div>
    );
};

export default Navbar;
