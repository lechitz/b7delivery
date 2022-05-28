import styles from './styles.module.css';
import {Product} from "../types/Product";
import Link from "next/link";

type Props = {
    data: Product;
    mainColor: string;
    secondColor: string;
}

export const ProductItem = ({data, mainColor, secondColor}: Props) => {
    return (
        <Link href={`/b7burguer/product/${data.id}`}>
            <a className={styles.container}>
                <div className={styles.head} style={{backgroundColor: secondColor}}></div>
                <div className={styles.info}>
                    <div className={styles.img}>
                        <img src={data.image} alt=""/>
                    </div>

                    <div className={styles.catName}>{data.categoryName}</div>
                    <div className={styles.name}>{data.name}</div>
                    <div className={styles.price} style={{color: mainColor}}>{data.price}</div>
                </div>
            </a>
        </Link>
    );
}