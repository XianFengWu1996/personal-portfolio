interface Props {
  item: TimeLine;
  onOpen: (args1: TimeLine) => void;
}

const TimelineItem = ({ item, onOpen }: Props) => {
  const handleOnClick = () => {
    onOpen(item);
  };
  return (
    <div
      className="timeline--content-text cursor-pointer slideup--expand-hide"
      onClick={handleOnClick}
    >
      <div className="text-box">
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

export default TimelineItem;
