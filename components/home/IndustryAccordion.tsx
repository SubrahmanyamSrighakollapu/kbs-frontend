"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { industries } from "@/data/home";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./HomeIndustriesnew.module.css";

export default function IndustryAccordion() {
  const [activeIndex, setActiveIndex] = useState(2); // Center node of 5 verticals
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    if (typeof window !== "undefined" && window.innerWidth <= 767) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 5000); // Auto change every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const N = industries.length;
  const activeItem = industries[activeIndex];

  return (
    <section className={styles.industriesSection}>
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={styles.heading}>
          <span className={styles.pillBadge}>
            OUR VERTICALS
          </span>
          <h2 className={styles.sectionTitle}>
            Five Core Verticals. Infinite Scale.
          </h2>
          <p className={styles.sectionDesc}>
            Deep domain expertise across technology, business automation, civil engineering, financial services, and workplace skill development.
          </p>
        </div>

        {/* 3D Rotational Circular Carousel Wheel Container (Desktop/Tablet) */}
        <div
          className={styles.coverflowContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {industries.map((item, idx) => {
            // Calculate offset relative to activeIndex for circular 3D rotational wheel
            let offset = idx - activeIndex;
            if (offset > N / 2) offset -= N;
            if (offset < -N / 2) offset += N;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 3; // Render 7 visible items in 3D wheel arc
            if (!isVisible) return null;

            // Class mapping based on offset level (-3, -2, -1, 0, 1, 2, 3)
            const offsetKey =
              offset < 0
                ? `left_${Math.abs(offset)}`
                : offset > 0
                ? `right_${offset}`
                : "center";
            const slotClass = styles[`slot_${offsetKey}`] || "";

            return (
              <div
                key={item.id}
                className={`${styles.rotationalCard} ${slotClass}`}
                onClick={() => setActiveIndex(idx)}
              >
                {/* Active Card Blended Background (/industries-bg.png) */}
                {isActive && (
                  <div className={styles.activeBgImageWrapper}>
                    <Image
                      src="/industries-bg.png"
                      alt="Industries Background"
                      fill
                      className={styles.activeBgImg}
                      priority
                    />
                    <div className={styles.activeBgFadeOverlay} />
                  </div>
                )}

                {/* Inactive Side Cards Background (/industries-side-bg.png) */}
                {!isActive && (
                  <div className={styles.inactiveBgImageWrapper}>
                    <Image
                      src="/industries-side-bg.png"
                      alt={`${item.category} background`}
                      fill
                      className={styles.inactiveBgImg}
                    />
                    <div className={styles.inactiveBgOverlay} />
                  </div>
                )}

                {/* Active Text Content Overlay */}
                <div
                  className={`${styles.activeOverlay} ${
                    isActive ? styles.activeOverlayVisible : styles.activeOverlayHidden
                  }`}
                >
                  <div className={styles.activeContentInner}>
                    <span className={styles.activeCategoryText}>{item.category}</span>
                    <h3 className={styles.activeTitle}>{item.title}</h3>
                    <p className={styles.activeDesc}>{item.description}</p>
                    <Link href={item.link || "/services-products"} className={styles.exploreBtn}>
                      <span>Explore More</span>
                      <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Inactive Vertical Spelled Name Overlay */}
                <div
                  className={`${styles.inactiveOverlay} ${
                    !isActive ? styles.inactiveOverlayVisible : styles.inactiveOverlayHidden
                  }`}
                >
                  <div className={styles.verticalTextWrap}>
                    {item.category.toUpperCase().split("").map((char, i) => (
                      <span
                        key={i}
                        className={char === " " ? styles.verticalSpace : styles.verticalChar}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Dots Navigation */}
        <div className={styles.carouselDots}>
          {industries.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`${styles.dotBtn} ${idx === activeIndex ? styles.activeDot : ""}`}
            />
          ))}
        </div>

        {/* Mobile Responsive View (< 768px) with Arrow & Pill Navigation */}
        <div
          className={styles.mobileCarouselWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Mobile Pill Nav */}
          <div className={styles.mobilePillNav}>
            {industries.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`${styles.mobilePillBtn} ${
                  idx === activeIndex ? styles.activeMobilePill : ""
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>

          {/* Active Mobile Display Card */}
          <div className={styles.mobileCardContainer}>
            <button
              type="button"
              className={`${styles.mobileNavArrow} ${styles.prevArrow}`}
              onClick={() => setActiveIndex((prev) => (prev - 1 + N) % N)}
              aria-label="Previous Industry"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div key={`mobile-card-${activeItem.id}`} className={styles.mobileActiveCard}>
              <div className={styles.activeBgImageWrapper}>
                <Image
                  src="/industries-bg.png"
                  alt="Industries Background"
                  fill
                  className={styles.activeBgImg}
                  priority
                />
                <div className={styles.activeBgFadeOverlay} />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-start text-left">
                <div className={styles.activeContentInner}>
                  <span className={styles.activeCategoryText}>{activeItem.category}</span>
                  <h3 className={styles.activeTitle}>{activeItem.title}</h3>
                  <p className={styles.activeDesc}>{activeItem.description}</p>
                  <Link href={activeItem.link || "/services-products"} className={styles.exploreBtn}>
                    <span>Explore More</span>
                    <ArrowRight className="w-4.5 h-4.5" />
                  </Link>
                </div>
              </div>
            </div>

            <button
              type="button"
              className={`${styles.mobileNavArrow} ${styles.nextArrow}`}
              onClick={() => setActiveIndex((prev) => (prev + 1) % N)}
              aria-label="Next Industry"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
