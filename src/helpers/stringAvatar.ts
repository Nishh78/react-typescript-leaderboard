const getAvatarString = (text: string): string => {
    const charList: string[] = text.split(" ");
    if (charList.length > 1) {
        return `${charList[0][0]}${charList[1][0]}`;
    } else {
        if (charList.length === 1) {
            return `${charList[0][0]}`;
        } else {
            return ``;
        }
    }
};

export {
    getAvatarString
}

