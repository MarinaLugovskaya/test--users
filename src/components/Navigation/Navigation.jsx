import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <div className={css.sideBar}>
        <ul className={css.sideBar__section}>
          <li className={css.sideBar__title}>
            <svg width="16" height="16" className={css.sideBar__svg1}>
              {/* <use href="../../images/svg/1. overview.svg"></use> */}
            </svg>
            <p>
              <a href="http://" className={css.sideBar__link}>
                Dashboard
              </a>
            </p>
          </li>
          <li className={css.sideBar__item}>
            <svg width="16" height="16" className={css.sideBar__svg2}>
              {/* <use href="../../images/svg/1. overview.svg"></use> */}
            </svg>
            <p>
              <a href="http://" className={css.sideBar__link}>
                Overview
              </a>
            </p>
          </li>
          <li className={css.sideBar__item}>
            <svg width="16" height="16" className={css.sideBar__svg3}>
              {/* <use href="../../images/svg/1. overview.svg"></use> */}
            </svg>
            <p>
              <a href="http://" className={css.sideBar__link}>
                Users
              </a>
            </p>
          </li>
          <li className={css.sideBar__item}>
            <svg width="16" height="16" className={css.sideBar__svg4}>
              {/* <use href="../../images/svg/1. overview.svg"></use> */}
            </svg>
            <p>
              <a href="http://" className={css.sideBar__link}>
                Ideas
              </a>
            </p>
          </li>
          <li className={css.sideBar__item}>
            <svg width="16" height="16" className={css.sideBar__svg5}>
              {/* <use href="../../images/svg/1. overview.svg"></use> */}
            </svg>
            <p>
              <a href="http://" className={css.sideBar__link}>
                Contacts
              </a>
            </p>
          </li>
          <li className={css.sideBar__item}>
            <svg width="16" height="16" className={css.sideBar__svg6}>
              {/* <use href="../../images/svg/1. overview.svg"></use> */}
            </svg>
            <p>
              <a href="http://" className={css.sideBar__link}>
                Agents
              </a>
            </p>
          </li>
          <li className={css.sideBar__item}>
            <svg width="16" height="16" className={css.sideBar__svg7}>
              {/* <use href="../../images/svg/1. overview.svg"></use> */}
            </svg>
            <p>
              <a href="http://" className={css.sideBar__link}>
                Articles
              </a>
            </p>
          </li>
        </ul>
        <ul>
          <li className={css.sideBar__item}>
            <svg width="16" height="16" className={css.sideBar__svg8}>
              {/* <use href="../../images/svg/1. overview.svg"></use> */}
            </svg>
            <p>
              <a href="http://" className={css.sideBar__link}>
                Settings
              </a>
            </p>
          </li>
          <li className={css.sideBar__item}>
            <svg width="16" height="16" className={css.sideBar__svg9}>
              {/* <use href="../../images/svg/1. overview.svg"></use> */}
            </svg>
            <p>
              <a href="http://" className={css.sideBar__link}>
                Subscription
              </a>
            </p>
          </li>
        </ul>
      </div>

      <nav className={css.section}>
        <div className={css.container}>
          <div className={css.section__header}>
            {/* <input type="text" name="name" class="" placeholder="Users" /> */}
            <h1 className={css.section__title}>Users</h1>
            <div className={css.section__buttonBox}>
              <button type="button" className={css.section__button}>
                <svg
                  className={css.section__buttonSvg1}
                  width="16"
                  height="16"
                ></svg>
              </button>
              <button type="button" className={css.section__button}>
                <svg
                  className={css.section__buttonSvg2}
                  width="16"
                  height="16"
                ></svg>
              </button>
              <a href="http://" className={css.section__link}>
                <p className={css.section__text}>Jones Ferdinand</p>
                <img
                  className={css.sectionUsers__img}
                  src={require("../../images/_header.png")}
                  width="40"
                  height="40"
                  alt="Leanne Graham"
                />
              </a>
            </div>
          </div>

          <section className={css.sectionStat}>
            <ul className={css.sectionStat__box}>
              <div className={css.sectionStat__container}>
                <li className={css.sectionStat__item}>
                  <p className={css.sectionStat__text}>Active</p>
                  <p className={css.sectionStat__txt}>60</p>
                </li>
              </div>
              <div className={css.sectionStat__container}>
                <li className={css.sectionStat__item}>
                  <p className={css.sectionStat__text}>Online</p>
                  <p className={css.sectionStat__txt}>16</p>
                </li>
              </div>
              <div className={css.sectionStat__container}>
                <li className={css.sectionStat__item}>
                  <p className={css.sectionStat__text}>Filtered</p>
                  <p className={css.sectionStat__txt}>43</p>
                </li>
              </div>
              <div className={css.sectionStat__container}>
                <li className={css.sectionStat__item}>
                  <p className={css.sectionStat__text}>Banned</p>
                  <p className={css.sectionStat__txt}>64</p>
                </li>
              </div>
            </ul>
          </section>
        </div>
      </nav>
    </>
  );
}
