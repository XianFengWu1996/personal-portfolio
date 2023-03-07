import { scrollTo } from '@/helper/Scroll';

const DownNavButton = () => {
  return (
    <svg
      id="down_nav_btn"
      className="absolute bottom-14 left-[50%] translate-x-[-50%] cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="60"
      fill="none"
      viewBox="0 0 35 60"
      onClick={() => scrollTo('expertise')}
    >
      <path
        id="outer"
        stroke="#66FCF1"
        strokeWidth="1.5"
        d="M34 17.5v25C34 51.613 26.613 59 17.5 59S1 51.613 1 42.5v-25C1 8.387 8.387 1 17.5 1S34 8.387 34 17.5z"
      ></path>
      <path
        id="arrow"
        fill="#66FCF1"
        d="M17.293 48.707a1 1 0 001.414 0l6.364-6.364a1 1 0 00-1.414-1.414L18 46.586l-5.657-5.657a1 1 0 00-1.414 1.414l6.364 6.364zM17 34v14h2V34h-2z"
      ></path>
    </svg>
  );
};

export default DownNavButton;
