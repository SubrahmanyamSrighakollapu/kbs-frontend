"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from "lucide-react";

interface VerticalVideoShowcaseProps {
  videoSrc: string;
  title: string;
  subtitle: string;
  badgeText?: string;
  accentColor?: string;
}

export default function VerticalVideoShowcase({
  videoSrc,
  title,
  subtitle,
  badgeText = "DIGITAL SHOWCASE",
  accentColor = "#168BFF",
}: VerticalVideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="relative py-16 sm:py-24 bg-[#03142B] text-white overflow-hidden select-none">
      {/* Background Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] blur-3xl opacity-20 pointer-events-none rounded-full"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-white/10 border border-white/15 backdrop-blur-md"
            style={{ color: accentColor }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {badgeText}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-normal">
            {subtitle}
          </p>
        </div>

        {/* 3D Glassmorphic Video Player Frame */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-950 group">
          {/* Top Frame Control Bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#061A36]/90 border-b border-white/10 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 font-mono text-[11px] text-slate-400">
                {title.toLowerCase().replace(/\s+/g, "-")}.mp4
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE PREVIEW
              </span>
            </div>
          </div>

          {/* Main Video Viewport */}
          <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover object-center"
            >
              <source src={encodeURI(videoSrc)} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

            {/* Hover Control Floating Bar */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between p-3 sm:p-4 rounded-2xl bg-[#03142B]/85 backdrop-blur-md border border-white/15 transition-opacity duration-300 opacity-90 group-hover:opacity-100 shadow-xl">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15 active:scale-95"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>

                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15 active:scale-95"
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-slate-300" /> : <Volume2 className="w-5 h-5 text-[#168BFF]" />}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block text-xs font-semibold text-slate-300">
                  KBS {badgeText}
                </span>

                <button
                  onClick={handleFullscreen}
                  aria-label="Toggle Fullscreen"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15 active:scale-95"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
