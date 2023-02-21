interface Props {
  item: TimeLine;
}

const TimelineItem = ({ item }: Props) => {
  return (
    <div className="timeline--content-text slideup--expand-hide">
      <div className="text-box">
        <h2 className="text-[#66fcf1] capitalize text-lg">{item.title}</h2>
        <small className="italic">{item.date}</small>

        <p className="text-sm">{item.content}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
