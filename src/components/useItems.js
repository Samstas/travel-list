import { useState } from "react";

function useItems() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = confirm("Do you want to clear packing list?");
    if (confirmed) setItems([]);
  }

  return {
    items,
    handleAddItems,
    handleDeleteItem,
    handleToggleItem,
    handleClearList,
  };
}

export default useItems;
