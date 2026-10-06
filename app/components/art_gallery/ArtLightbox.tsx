"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom, Fullscreen, Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface ArtLightboxProps {
  open: boolean;
  close: () => void;
  index: number;
  slides: {
    src: string;
    title: string;
    description: string;
  }[];
}

export default function ArtLightbox({ open, close, index, slides }: ArtLightboxProps) {
  return (
    <Lightbox
      open={open}
      close={close}
      index={index}
      slides={slides}
      plugins={[Zoom, Fullscreen, Thumbnails]}
      styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.98)" } }}
    />
  );
}
