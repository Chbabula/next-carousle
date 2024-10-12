import React from "react";
import styles from "./demo.module.css";
import { data } from "../data/Data";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Demo = () => {
    const [index, setIndex] = useState(0);
  const [canClick, setCanClick] = useState(true);
  const isSmallScreen = typeof window !== "undefined" && window.innerWidth <= 640;
  const translateXValue = isSmallScreen
  ? index * 35 
  : index * 25; 
  const translateX = isSmallScreen
  ? index * 368 
  : index * 500; 
  const totalCards = data.length;


  const btnPrev = () => {
    if (index > 0 && canClick) {
      setIndex((prevIndex) => prevIndex - 1);
      setCanClick(false);
      setTimeout(() => setCanClick(true), 200);
    }
  };


  const btnNext = () => {
    if (index < totalCards - 1 && canClick) {
      setIndex((prevIndex) => prevIndex + 1);
      setCanClick(false);
      setTimeout(() => setCanClick(true), 200);
    }
  };

 
  const handleCardClick = (cardIndex) => {
    setIndex(cardIndex);
  };
  const style = {
    transform: `translateX(-${translateXValue}px)`,
    width: `${totalCards * 65}px`,
  };
  const stylesTra = {
    transform: `translateX(-${translateX}px)`,
    width: `${totalCards * 450}px`,
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.leftChild} >
        <div
            className={styles.slider}
            style={stylesTra}
          >

          {data &&
            data.map((card) => (
              <div className={styles.cardContainer} key={card.id}>
                <div className={styles.mainCard} >
                  <div className={styles.hikeContainer}>{card.hike}</div>
                  <div className={styles.profileContainer}>
                    <div className={styles.profileImage}>
                      <Image
                        src={card.profileImg}
                        alt="Profile Image"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className={styles.content}>
                      <h2>{card.name}</h2>
                      <p className={styles.position}>{card.position}</p>
                      <p className={styles.desc}>{card.desc}</p>
                    </div>
                  </div>
                  <div className={styles.companyBtnContainer}>
                    <div className={styles.companyImgage}>
                      <Image
                        src={card.companyImg}
                        alt="Company Image"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className={styles.btnContanier}>
                      <button className={styles.btn}>
                        <p>{card.watch}</p>
                        <div className={styles.youtubeImgage}>
                          <Image
                            src={card.youtubeImg}
                            alt="Youtube Image"
                            className={styles.youtubeImg}
                            width={100}
                            height={100}
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.rightChild}>
          <div className={styles.cardContainerRight}>
            <div className={styles.mainCardRight}>
              <div className={styles.headerContainer}>
                <h2>Real Stories, Real Success</h2>
              </div>
              <div className={styles.discover}>
                <p>Discover what our learners say about us</p>
              </div>
              {/* small-carousel */}
              <div className={styles.smallCardContainer}>
                <div className={styles.iconleftDiv}>
                  <FaArrowLeftLong
                  className={`${styles.iconleft} ${index === 0 ? styles.disabled : ""}`}
                  onClick={btnPrev}
                  />
                </div>
                <div className={styles.cardsContainerDiv}>
                <div
                className={styles.sliderTracks}
                style={style}
              >

                  {data.map((card, cardIndex) => (
                    <div
                      key={card.id}
                      onClick={() => handleCardClick(cardIndex)}
                      className={`${styles.aniImages} ${
                        index === cardIndex ? styles.activeCard : styles.inactiveCard
                      }`}
                    >
                      <Image
                        src={card.profileImg}
                        alt="Profile Image"
                        width={100}
                        height={100}
                        className={styles.aniImg}
                      />
                    </div>
                  ))}
              </div>
                </div>
                <div className={styles.iconrightDiv}>
                  <FaArrowRightLong
                  className={`${styles.iconright} ${
                    index === totalCards - 1 ? styles.disabled : ""
                  }`}
                  onClick={btnNext}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
