import styles from "../styles/CardUser.module.scss"
import {useState} from "react";

export default function CardUser({useSmall, name, email, number, click}) {
    let wrapperClass = styles.card;
    if (useSmall) {
        wrapperClass = styles.cardsmall;
    }

    return (
        <div className={wrapperClass}>
            <p className={styles.user__info}>{name}</p>
            <p className={styles.user__info}>{email}</p>
            <p className={styles.user__info}>{number}</p>
            <div onClick={click} className={styles.user__btn}>Show articles</div>
        </div>
    )
}