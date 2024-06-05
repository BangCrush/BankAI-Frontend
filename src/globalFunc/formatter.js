export const accFormatter = (accCode) => {
    return accCode.replace(/(\d{2})(\d{5})(\d{7})/, "$1-$2-$3");
    }