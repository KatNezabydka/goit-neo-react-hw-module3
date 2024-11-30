import css from "../SearchBox/SearchBox.module.css";

const SearchBox = ({filter, setFilter}) => {
    return (
        <div className={css.search}>
            <label className={css.label}>
                Find contacts by name:
                <input className={css.input}
                       type="text"
                       value={filter}
                       onChange={(e) => setFilter(e.target.value)}
                />
            </label>
        </div>
    );
};

export default SearchBox;