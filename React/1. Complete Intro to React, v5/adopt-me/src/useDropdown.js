import React, { useState } from "react";

// const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);

  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          onChange={e => setState(e.target.value)}
          onBlur={e => setState(e.target.value)}
        >
          <option>All</option>
          {options.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </label>
    );
  };
  return [state, Dropdown, setState];
};

export default useDropdown;
