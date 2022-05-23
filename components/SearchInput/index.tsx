import React, {useState} from "react";
import styles from './styles.module.css';

type Props = {
    mainColor: string;
    onSearch: (searchValue: string) => void;                                                                            //Quando clicar no botão, executa a função
}

export const SearchInput = ({ mainColor, onSearch }: Props) => {                                                        //Ajustando coloração do componente com Props

    const [focused, setFocused] = useState(false);                                                            //Saber se está com foco ou não
    const [searchValue, setSearchValue] = useState('');                                                       //Função para saber o que está sendo digitado

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {                                                                                         //Função para quando existir clique no botão de Search
        if (event.code === 'Enter') {                                                                                   //Se o botão pressionado foi enter
            onSearch(searchValue);
        }
    }

    return (
        <div>
            <div className={styles.container}
                 style={{ borderColor: focused ? mainColor : "#FFFFFF" }}                                               //se tá focado mainColor, se não: branco
            >
                <div                                                                                                    //botão da lupa
                    className={styles.button}
                    onClick={()=>onSearch(searchValue)}                                                                 //Quando clicar no botão vai executar a onSearch passando o valor
                    >
                </div>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Digite o nome do produto"                                                              //Texto inicial do campo
                    onFocus={()=>setFocused(true)}                                                                //Quando focar nele, executa
                    onBlur={()=>setFocused(false)}                                                                //Quando não estiver focado nele, executa
                    onKeyUp={handleKeyUp}                                                                               //Quando der enter no campo
                    value={searchValue}
                    onChange={(e)=>setSearchValue(e.target.value)}
                />
            </div>
        </div>
    );
}