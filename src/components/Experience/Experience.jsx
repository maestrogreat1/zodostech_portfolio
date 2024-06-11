import React from "react";

import { getImageUrl } from "../../utils,js";

import skills from "../../data/skills.json";
import history from "../../data/history.json";
import history2 from "../../data/history2.json";
import history3 from '../../data/history3.json'
import history4 from '../../data/history4.json'

import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      {/* <h2 className={styles.title}>Experience</h2> */}
      <div className={styles.content}>
        {/* <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div> */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                {/* <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} logo`}
                /> */}
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role} ${historyItem.organisation}`}</h3>
                  {/* <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p> */}
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <ul className={styles.history}>
          {history2.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                {/* <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} logo`}
                /> */}
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role} ${historyItem.organisation}`}</h3>
                  {/* <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p> */}
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <ul className={styles.history}>
          {history3.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                {/* <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} logo`}
                /> */}
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role} ${historyItem.organisation}`}</h3>
                  {/* <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p> */}
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <ul className={styles.history}>
          {history4.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                {/* <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} logo`}
                /> */}
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role} ${historyItem.organisation}`}</h3>
                  {/* <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p> */}
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
