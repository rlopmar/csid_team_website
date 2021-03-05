interface Image {
  src: string;
  thumbnail: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  caption?: string;
}

export type IGallery = Image[];

// const verticalImages: number[] = [1, 4, 13, 16, 21, 29, 34];

export default function getImages(): IGallery {
  const images: number[] = Array.from(Array(37).keys());
  images.shift();
  const gallery: IGallery = images.map((i: number) => {
    const imagePath = `/Images/TeamEvent/${i}.jpg`;
    let w: number = 320;
    let h: number = 174;

    return {
      src: imagePath,
      thumbnail: imagePath,
      thumbnailWidth: w,
      thumbnailHeight: h,
      caption: `Image ${i}`,
    };
  });

  return gallery;
}
