interface Props {
  item: TimeLine;
  onOpen: (args1: TimeLine) => void;
  index: number;
}

export const TimelineItem = ({ item, onOpen }: Props) => {
  const handleOnClick = () => {
    onOpen(item);
  };
  return (
    <div
      className={`timeline--text-right cursor-pointer slide--left-expand-hide`}
      onClick={handleOnClick}
    >
      <div className="text--box-right">
        <h2 className="text-[#66fcf1] capitalize text-lg mb-2">{item.title}</h2>
        <small className="italic">{item.date}</small>

        <p
          className={`text-sm ${
            item.content && item.content.length > 50 ? 'ellipsis--3' : ''
          }`}
        >
          {item.content}
        </p>
      </div>
    </div>
  );
};

export const DesktopTimeLineItem = ({ item, onOpen, index }: Props) => {
  const handleOnClick = () => {
    onOpen(item);
  };
  return (
    <div
      className={`cursor-pointer place-items-end max-w-[45%] ${
        index % 2 === 0
          ? 'justify-self-start timeline--text-left slide--right-expand-hide '
          : 'justify-self-end timeline--text-right slide--left-expand-hide '
      }`}
      onClick={handleOnClick}
    >
      <div
        className={`${index % 2 === 0 ? 'text--box-left' : 'text--box-right'}`}
      >
        <h2 className="text-[#66fcf1] capitalize text-lg mb-2">{item.title}</h2>
        <small className="italic">{item.date}</small>

        <p
          className={`text-sm ${
            item.content && item.content.length > 50 ? 'ellipsis--3' : ''
          }`}
        >
          {item.content}
        </p>
      </div>
    </div>
  );
};
