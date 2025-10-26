"use client";

export const useRandomMedia = () => {
  const AnimeMediaLinks: string[] = [
    "https://youtu.be/P5k2Db1SRrY?si=fKYwb2o2QNZTSy2W",
    "https://www.youtube.com/watch?v=4kNt62PptEQ",
    "https://www.youtube.com/watch?v=Yd8kUoB72xU",
    "https://www.youtube.com/watch?v=iqsnJJK8GA4",
    "https://www.youtube.com/watch?v=7pmd0kt3FOs",
    "https://www.youtube.com/watch?v=GgwUenaQqlM",
    "https://www.youtube.com/watch?v=8Ebqe2Dbzls",
    "https://www.youtube.com/watch?v=h4HkXR3NSI4",
    "https://www.youtube.com/watch?v=rh-xfHTJp6M",
  ];

  let playedVideos: string[] = [];

  const handleImageClick = (): void => {
    if (playedVideos.length === AnimeMediaLinks.length) {
      playedVideos = [];
    }

    let randomVideoUrl: string;
    do {
      const randomIndex = Math.floor(Math.random() * AnimeMediaLinks.length);
      randomVideoUrl = AnimeMediaLinks[randomIndex];
    } while (playedVideos.includes(randomVideoUrl));

    playedVideos.push(randomVideoUrl);
    window.open(randomVideoUrl, "_blank");
  };

  return { handleImageClick };
};
