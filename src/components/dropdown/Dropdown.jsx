import React from 'react'
import styles from "./Dropdown.module.css";

const Dropdown = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
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
