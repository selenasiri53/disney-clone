const getImagePath = (imagePath?: string, fullSize?: boolean) => {
    return imagePath
    ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
    : "https://www.pexels.com/photo/white-screen-projector-by-the-beach-2507025/" // placeholder alt image
}

export default getImagePath;