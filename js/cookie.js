export const COOKIE = {
    
    set(key, value) {
        document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value);
    },

    get(key) {
        const cookie = Object.fromEntries(document.cookie.split(';').map(el => el.split('=')));
        return decodeURIComponent(cookie[key]);
    },

    delete(key) {
        document.cookie = `${encodeURIComponent(key)=''}; max-age=-1`;
    }
}

// ["user=John", "user2=Sara"]
// [['user', 'John'], ['user2', 'Sara']]