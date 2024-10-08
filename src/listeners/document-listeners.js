/**
 * handle frequent changes to the content in the edit page
 */
export const handleChangeOnContent = (setContent, setIsTyping) => (e) => {
    setContent(e.target.value);
    setIsTyping(true);
    clearTimeout(window.typingTimeout);
    window.typingTimeout = setTimeout(() => setIsTyping(false), 1000);
};

/**
 * handle frequent changes to title in the edit page
 */
export const handleChangeOnTitle = (setTitle) => (e) => {
    setTitle(e.target.value);
};