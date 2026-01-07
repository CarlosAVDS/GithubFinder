type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}
import { KeyboardEvent, useState } from "react";
import { BsSearch } from "react-icons/bs"
import classes from "./Seach.module.css"

const Search = ({ loadUser }: SearchProps) => {
    const [userName, setUserName] = useState<string>("");
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            loadUser(userName);
        }
    }
    return (
        <div className={classes.search}>
            <h2>Busque por um usuário do GitHub:</h2>
            <p>Conheça seus melhores repositórios</p>
            <div className={classes.search_box}>
                <input type="text" placeholder='Digite o nome do usuário' onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown} />
                <button>
                    <BsSearch onClick={() => loadUser(userName)} />
                </button>
            </div>
        </div>
    )
}

export default Search