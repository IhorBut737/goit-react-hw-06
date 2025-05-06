import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.searchBox}>
      <label className={s.label}>
        Search contacts:
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search by name"
        />
      </label>
    </div>
  );
};

export default SearchBox;
