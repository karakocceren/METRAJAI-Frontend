import React from 'react'
import styles from "./Dropdown.module.css";

const Dropdown = ({ options, defaultValue, onChange }) => {
  return (
    <select
      defaultValue={defaultValue}
      className={styles.select}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
