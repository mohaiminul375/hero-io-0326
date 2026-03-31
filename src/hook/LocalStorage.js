import { toast } from "react-toastify";

export const getInsApp = (key) => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
}
// set to ls
const saveApp = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}
// pass key get Ls data
export const getSavingId = () => getInsApp('InstalledApps');
// is existed in LS (check duplicate)
export const isInstalledApp = (id) => getSavingId().includes(id);

// saving Function
export const addToLs = (id) => {
    // get the ls key
    const app = getSavingId();
    if (!isInstalledApp(id)) {
        // push to LS
        app.push(id)
        saveApp('InstalledApps', app)
         toast.success('Installed Successfully')
    } else {
        toast.error('Already install this app')
    }
}

