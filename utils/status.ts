let isAdmin = false;

export const getStatus = () => {
    return isAdmin;
}

export const setStatus = (status: boolean) => {
    isAdmin = status;
}