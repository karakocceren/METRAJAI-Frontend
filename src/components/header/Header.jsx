import {React, useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";
import Dropdown from '../dropdown/Dropdown'
import styles from "./Header.module.css";

const languages = [
  { value: 'tr', label: 'Türkçe' },
  { value: 'en', label: 'English' },
];

const currencies = [
  { value: 'tl', label: 'TL' },
  { value: 'usd', label: 'USD' },
];

const Header = () => {
  const { i18n, t } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("tl");

  useEffect(() => {
    // Get the base language (e.g., "en" from "en-US")
    const detectedLanguage = i18n.language.split("-")[0];

    // Set language to Turkish if detected language is Turkish, otherwise default to English
    const initialLanguage = detectedLanguage === "tr" ? "tr" : "en";
    setSelectedLanguage(initialLanguage); // Set initial language state
  }, [i18n.language]);

  const handleLanguageChange = (newLanguage) => {
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("i18nextLng", newLanguage);
  };

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
            {t("sub-title")}
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
      <Dropdown
          options={currencies}
          value={selectedCurrency}
          onChange={handleCurrencyChange}
        />
        <Dropdown
          options={languages}
          value={selectedLanguage}
          onChange={handleLanguageChange}
        />
      </div>
    </div>
  )
}

export default Header
