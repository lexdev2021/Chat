export function convertTime() {
    const date = new Date();
    // const date = new Date(2022, 3, 27, 8, 6);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes =('0'+ date.getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
}