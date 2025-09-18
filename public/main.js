const likeBtn = document.querySelector(".likeBtn");

export function setupCounter(likesContainer) {
    let counter = 0;
    const setCounter = (count) => {
        counter = count;
        likesContainer.innerHTML = `${counter}`;
    };
    likeBtn.addEventListener("click", () => setCounter(++counter));
    setCounter(0);
}
setupCounter(document.querySelector(".heartCounter"));
