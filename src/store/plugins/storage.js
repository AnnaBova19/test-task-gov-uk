import createPersistedState from "vuex-persistedstate";

let persistedState;

if (process.browser) {
    let SecureLS = require('secure-ls');

    const ls = new SecureLS({ isCompression: false });
    
    persistedState = createPersistedState({
        key: "globalstate",
        paths: [
            "registration"
        ],
        storage: {
            getItem: key => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: key => ls.remove(key)
        }
    });
}

export default persistedState;
