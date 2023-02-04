const addBubbles = () => {
    const bubbles = `
    <div class="bubbles relative flex">
        <span style="--i:11" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:12" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:24" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:10" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:14" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:23" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:18" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:16" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:19" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:20" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:22" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:25" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:18" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:21" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:15" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:13" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:26" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:27" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:13" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:28" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:11" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:12" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:24" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:10" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:14" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:23" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:18" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:16" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:19" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:20" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:22" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:25" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:18" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:21" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:15" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:13" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:26" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:27" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:13" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
        <span style="--i:28" class="relative -z-10 w-[30px] h-[30px] bg-secondary-clr mx-1 rounded-[50%] shadow-bubbles-odd even:shadow-bubbles-even even:bg-txt-sec-clr animate-bubble-anmi"></span>
    </div>`;

    return bubbles;
}
document.getElementById('main').insertAdjacentHTML('beforeend', addBubbles());