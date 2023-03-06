export const originalTextColor = '#8f9498';
export const animationTextColor = '#8a2be2';

// on focus in, animate the label to the right
export function focusIn(el: HTMLElement | null) {
  if (el) {
    const type = el.children[0].tagName.toLowerCase(); // in my case the result will be input or textarea
    el.style.outline = `1.5px solid ${animationTextColor}`; // add the outline on focus

    // either be an input or an textarea
    const input = el.querySelector('input');
    const textarea = el.querySelector('textarea');

    const label = el.querySelector('label');
    if (!label) return;

    // handler for input
    if (type === 'input') {
      if (!input) return; // check if there is input

      // during focusing in, move the label to the left 100% (right) minus the element width with some space
      // label.clientWidth is the element width excluding the margin
      // the first 1.2rem is to offset the margin left
      // the second rem is to give some breathing room
      // design 1, color change
      // label.style.left = `calc(100% - ${label.clientWidth}px - 1.2rem - 1.2rem)`;
      // label.style.color = animationTextColor;

      // design 2, background change
      if (input.value.length < 1) {
        input.style.width = `calc(100% - ${label.clientWidth}px - 1.2rem - 0.4rem)`;
        focusInLabel(label);
      }
    }
    // handler for textarea
    if (type === 'textarea') {
      if (!textarea) return; // check if there is input

      // during focusing in, move the label to the left 100% (right) minus the element width with some space
      // label.clientWidth is the element width excluding the margin
      // the first 1.2rem is to offset the margin left
      // the second rem is to give some breathing room
      // design 1, color change
      // label.style.left = `calc(100% - ${label.clientWidth}px - 1.2rem - 1.2rem)`;
      // label.style.color = animationTextColor;

      // design 2, background change
      if (textarea.value.length < 1) {
        label.innerText = 'Message';
        label.style.top = `calc(100% - ${label.clientHeight}px - 1rem)`;

        textarea.style.width = `calc(100% - ${label.clientWidth}px - 1.2rem)`;
        focusInLabel(label);
      }
    }
  }
}

// on focus out, animate the label back to the left
export function focusOut(el: HTMLElement | null) {
  // remove the outline
  if (!el) return;
  el.style.outline = 'none';

  const type = el.children[0].tagName.toLowerCase(); // in my case the result will be input or textarea

  const input = el.querySelector('input');
  const textarea = el.querySelector('textarea');
  const label = el.querySelector('label');

  if (!label) return;

  if (type === 'input') {
    if (!input) return;

    if (input.value.length < 1) {
      // on focus out, return the label back to the original spot
      input.style.width = '100%';
      focusOutLabel(label);
    }
  }

  if (type === 'textarea') {
    if (!textarea) return;

    if (textarea.value.length < 1) {
      label.innerText = 'Type Your Message';
      label.style.top = `1rem`;
      textarea.style.width = '100%';
      focusOutLabel(label);
    }
  }
}

const focusOutLabel = (label: HTMLLabelElement) => {
  label.style.left = '0';
  label.style.color = originalTextColor;
  // on focus out, return the label back to the original spot

  label.style.padding = '0';
  label.style.background = 'none';
  label.style.fontSize = '1rem';
  label.style.marginLeft = '1.2rem';
};

const focusInLabel = (label: HTMLLabelElement) => {
  label.style.color = '#fff';
  label.style.backgroundColor = animationTextColor;
  label.style.paddingBlock = '0.25rem';
  label.style.paddingInline = '0.8rem';
  label.style.borderRadius = '0.4rem';
  label.style.fontSize = '0.75rem';
  label.style.marginLeft = '0';
  label.style.left = `calc(100% - ${label.clientWidth}px - 1.2rem - 0.4rem)`;
};
