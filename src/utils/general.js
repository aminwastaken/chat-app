export function getItem(key) {
    const item = localStorage.getItem(key);
    return item && JSON.parse(item);
}