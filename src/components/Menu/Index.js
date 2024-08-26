import React from "react";
import Edit from '@mui/icons-material/Edit';
import CleaningServices from '@mui/icons-material/CleaningServices';
import Undo from '@mui/icons-material/Undo';
import Redo from '@mui/icons-material/Redo';
import { ArrowCircleDown } from "@mui/icons-material";
import styles from './index.module.css';

const Menu = () => {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.iconWrapper}><Edit className={styles.icon} /></div>
            <div className={styles.iconWrapper}><CleaningServices className={styles.icon} /></div>
            <div className={styles.iconWrapper}><Undo className={styles.icon} /></div>
            <div className={styles.iconWrapper}><Redo className={styles.icon} /></div>
            <div className={styles.iconWrapper}><ArrowCircleDown className={styles.icon} /></div>
        </div>
    );
};

export default Menu;
