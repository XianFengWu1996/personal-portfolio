import { TimelineData } from './data';
import { TimelineItem } from './TimelineItem';

interface Props {
  handleOpen: (arg1: TimeLine) => void;
}

const MobileTimeline = ({ handleOpen }: Props) => {
  return (
    <div className="w-full px-5 py-10 lg:hidden">
      <div className="timeline--container-mobile flex">
        {/* timeline line */}
        <span id="timeline--fill-mobile">
          <span id="timeline--line-mobile"></span>
        </span>

        {/* timeline contents */}
        <div className="timeline--content h-fit flex flex-col">
          {TimelineData.map((timeline, i) => {
            return (
              <TimelineItem
                key={i}
                item={timeline}
                onOpen={handleOpen}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileTimeline;
