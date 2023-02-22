import { TimelineData } from './data';
import { DesktopTimeLineItem } from './TimelineItem';

interface Props {
  handleOpen: (arg1: TimeLine) => void;
}

const DesktopTimeline = ({ handleOpen }: Props) => {
  return (
    <div className="hidden lg:flex py-10">
      <div className="timeline--container-desktop w-screen px-10 grid grid-cols-1">
        {TimelineData.map((timeline, i) => {
          return (
            <DesktopTimeLineItem
              key={i}
              item={timeline}
              onOpen={handleOpen}
              index={i}
            />
          );
        })}
      </div>

      <span
        id="timeline--fill-desktop"
        className="absolute left-[50%] translate-x-[-50%] h-full"
      >
        <span id="timeline--line-desktop"></span>
      </span>
    </div>
  );
};

export default DesktopTimeline;
