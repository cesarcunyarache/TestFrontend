'use client'
import React, { useState } from 'react';
import styles from '../MenuItem/MenuItem.module.scss';

export type MenuItemProps = {
    content: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ content }) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <li onClick={toggleActive} className={isActive ? styles.active : ''}>
            {content}
        </li >
    );
};

export default MenuItem;