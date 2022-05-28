import styles from '../../styles/Home.module.css'
import {SearchInput} from "../../components/SearchInput";
import {Banner} from "../../components/Banner";
import {ProductItem} from "../../components/ProductItem";

const Home = () => {

    const handleSearch = (searchValue: any) => {                // NÃO ESTAVA COMO ANY, coloquei pra não dar erro
        console.log(`Você está buscando por: ${searchValue}`)
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerTop}>
                    <div className={styles.headerTopLeft}>
                        <div className={styles.headerTitle}>Olá, <strong>Lechitz</strong>!</div>
                        <div className={styles.headerSubtitle}>O que deseja pra hoje?</div>
                    </div>
                    <div className={styles.headerTopRight}>
                        <div className={styles.menuButton}>
                            <div className={styles.menuButtonLine}></div>
                            <div className={styles.menuButtonLine}></div>
                            <div className={styles.menuButtonLine}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.headerBottom}>
                    <SearchInput
                        mainColor="#FB9400"
                        onSearch={handleSearch}
                    />
                </div>
            </header>

            <Banner/>

            <div className={styles.grid}>
                <ProductItem
                    data={{id: 1, image: '/tmp/burguer1.png', categoryName: 'Tradicional', name: 'Texas Burguer', price: 'R$25,50'}}
                    mainColor="#FB9400"
                    secondColor="#FFF9F2"
                />
                <ProductItem
                    data={{id: 2, image: '/tmp/burguer2.png', categoryName: 'Tradicional', name: 'Golden Burguer', price: 'R$27,50'}}
                    mainColor="#FB9400"
                    secondColor="#FFF9F2"
                />
                <ProductItem
                    data={{id: 3, image: '/tmp/burguer3.png', categoryName: 'Tradicional', name: 'Monster Burguer', price: 'R$28,50'}}
                    mainColor="#FB9400"
                    secondColor="#FFF9F2"
                />
                <ProductItem
                    data={{id: 4, image: '/tmp/burguer4.png', categoryName: 'Tradicional', name: 'Old Burguer', price: 'R$27,50'}}
                    mainColor="#FB9400"
                    secondColor="#FFF9F2"
                />
            </div>
        </div>
    );
}

export default Home;