import styles from '../../styles/Home.module.css'
import {SearchInput} from "../../components/SearchInput";

const Home = () => {

    const handleSearch = (searchValue) => {
        console.log(`Você está buscando por: ${searchValue}`)
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerTop}>
                    <div className={styles.headerTopLeft}>
                        <div className={styles.headerTitle}>Seja Bem-Vindo!</div>
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
        </div>
    )
}

export default Home;