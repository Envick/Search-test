import {createSignal, createEffect } from 'solid-js';
import Button from "../Button/Button";
import List from "../List/List";
import Input from "../Input/Input";

const Search = (props) => {
  const [query, setQuery] = createSignal('');
  const [sortedAsc, setSortedAsc] = createSignal(true);
  const [filteredItems, setFilteredItems] = createSignal(props.items);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSortToggle = () => {
    setSortedAsc(!sortedAsc());
  };

  createEffect(() => {
    const filtered = props.items.filter((item) =>
        item.toLowerCase().includes(query().toLowerCase())
    )
    setFilteredItems(filtered);
  });

  const sortedItems = () => sortedAsc()
      ? filteredItems().sort()
      : filteredItems().sort().reverse();


  return (
      <div>
        <Input query={query()} handleInputChange={handleInputChange} />
        <Button handleSort={handleSortToggle} sortedAsc={sortedAsc()} />
        <List sortedItems={sortedItems()}/>
      </div>
  );
};

export default Search;