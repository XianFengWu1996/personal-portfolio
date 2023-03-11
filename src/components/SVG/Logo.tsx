import { Inter } from '@next/font/google';

interface Props {
  size?: number;
}

const inter = Inter({
  weight: ['300', '600', '800'],
  subsets: ['latin'],
});

const Logo = ({ size = 250 }: Props) => {
  return (
    <svg
      id="logo--pc-svg"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 397 242"
    >
      <path
        id="logo--pc-bottom"
        d="M173.098 210V210C173.098 212.761 175.337 215 178.098 215H209.902C212.663 215 214.902 212.761 214.902 210V210"
        stroke="white"
        strokeWidth="9"
      />
      <path
        id="logo--pc"
        d="M340.126 205V20C340.126 11.7157 333.411 5 325.126 5H56.6264C48.3422 5 41.6264 11.7157 41.6264 20V204C41.6264 206.761 39.3879 209 36.6264 209H14.5167C9.2378 209 4.49561 213.174 5.47544 218.361C6.62177 224.429 10.0542 229.339 18.023 235.543C19.6917 236.842 21.7657 237.5 23.8805 237.5H363.812C365.964 237.5 368.073 236.817 369.759 235.479C376.92 229.798 380.587 225.18 382.561 219.684C384.545 214.163 379.581 209 373.714 209H33.6264"
        stroke="white"
        strokeWidth="9"
      />
      <path
        id="logo--pc-text"
        className="hidden"
        d="M156.204 105.189C155.92 102.324 154.701 100.099 152.546 98.5128C150.392 96.9266 147.468 96.1335 143.775 96.1335C141.265 96.1335 139.147 96.4886 137.418 97.1989C135.69 97.8854 134.364 98.8442 133.441 100.075C132.541 101.306 132.092 102.703 132.092 104.266C132.044 105.568 132.317 106.704 132.908 107.675C133.524 108.645 134.364 109.486 135.43 110.196C136.495 110.883 137.726 111.486 139.123 112.007C140.52 112.504 142.011 112.93 143.597 113.286L150.131 114.848C153.304 115.558 156.216 116.505 158.867 117.689C161.519 118.873 163.815 120.329 165.756 122.057C167.698 123.785 169.201 125.821 170.266 128.165C171.355 130.509 171.912 133.196 171.935 136.226C171.912 140.677 170.775 144.536 168.526 147.803C166.301 151.046 163.081 153.567 158.867 155.366C154.677 157.142 149.622 158.03 143.704 158.03C137.833 158.03 132.719 157.13 128.363 155.331C124.031 153.532 120.645 150.868 118.207 147.341C115.792 143.79 114.525 139.398 114.407 134.166H129.286C129.452 136.605 130.15 138.641 131.381 140.274C132.636 141.884 134.305 143.103 136.388 143.932C138.496 144.737 140.875 145.139 143.526 145.139C146.13 145.139 148.391 144.76 150.309 144.003C152.25 143.245 153.754 142.192 154.819 140.842C155.884 139.493 156.417 137.942 156.417 136.19C156.417 134.557 155.932 133.184 154.961 132.071C154.014 130.958 152.617 130.011 150.771 129.23C148.948 128.449 146.71 127.739 144.059 127.099L136.14 125.111C130.008 123.619 125.167 121.287 121.616 118.115C118.065 114.943 116.301 110.67 116.325 105.295C116.301 100.892 117.473 97.045 119.84 93.7543C122.231 90.4635 125.51 87.8949 129.677 86.0483C133.844 84.2017 138.578 83.2784 143.881 83.2784C149.279 83.2784 153.99 84.2017 158.015 86.0483C162.063 87.8949 165.212 90.4635 167.461 93.7543C169.71 97.045 170.87 100.857 170.941 105.189H156.204ZM198.649 157L177.839 84.2727H194.636L206.674 134.805H207.278L220.559 84.2727H234.941L248.187 134.912H248.826L260.865 84.2727H277.662L256.852 157H241.866L228.017 109.45H227.449L213.635 157H198.649Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;