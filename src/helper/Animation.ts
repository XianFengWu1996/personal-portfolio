interface OpacityAnimation {
  el: Element;
  opacity: number[];
  offset?: number[];
  easing?: string[];
  options?: number | KeyframeAnimationOptions;
}

export const opacityAnimation = ({
  el,
  opacity,
  offset,
  easing,
  options,
}: OpacityAnimation) => {
  // el is the element you would want to animate
  // duration is the duration of the animation
  // opacity is an array of keyframes [1 , 0] is from 1 to 0
  // offset is equal to specifying the starting and ending point
  // sort of like the percentage value in css keyframe
  return el.animate(
    {
      opacity,
      offset,
      easing,
    },
    options
  );
};
