// helpGetDataFunc.js

/**
 * Get the image of recipe
 * @returns string
 */
export function getImgUrl(data) {
    if (data.image) return data.image;
    return null;
}


/**
 * Get the title of recipe
 * @returns string
 */
export function getTitle(data) {
    if (data.title) return data.title;
    return null;
}


/**
 * Get the cooking time of recipe
 * @returns string
 */
export function getTime(data) {
    if (data.readyInMinutes) return data.readyInMinutes;
    return null;
}