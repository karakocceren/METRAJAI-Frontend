import {React, useState} from 'react'
import Dropdown from '../dropdown/Dropdown'
import styles from "./Header.module.css";

const languages = [
  { value: 'turkish', label: 'Türkçe' },
  { value: 'english', label: 'English' },
];

const currencies = [
  { value: 'tl', label: 'TL' },
  { value: 'usd', label: 'USD' },
];

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("turkish");
  const [selectedCurrency, setSelectedCurrency] = useState("tl");

  const handleLanguageChange = (newLanguage) => {
    setSelectedLanguage(newLanguage);
    console.log("Selected Language:", newLanguage);
  }

  const handleCurrencyChange = (newCurrency) => {
    setSelectedCurrency(newCurrency);
    console.log("Selected Currency:", newCurrency);
  }

  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.icon}>
          Icon
        </div>
        <div className={styles.textContent}>
          <div className={styles.title}>
            METRAJAI
          </div>
          <div className={styles.subtitle}>
            Building the Future
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
      <Dropdown
          options={currencies}
          defaultValue={selectedCurrency}
          onChange={handleCurrencyChange}
        />
        <Dropdown
          options={languages}
          defaultValue={selectedLanguage}
          onChange={handleLanguageChange}
        />
      </div>
    </div>
  )
}

export default Header
