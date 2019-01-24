function $(idSelector) {
  showToolTip = ({title, content, onClose}) => {
    const parentEl = document.getElementById(idSelector);

    const existingToolTip = document.getElementById('tooltip-wrapper');

    if (existingToolTip) existingToolTip.remove();
    const tooltipEl = document.createElement('div');
    tooltipEl.id = 'tooltip-wrapper'
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.bottom = window.innerHeight - parentEl.offsetTop;
    tooltipEl.style.left = parentEl.offsetLeft;
    tooltipEl.onclick = (e) => {
      e.stopPropagation();
    }

    const titleEl = document.createElement('h3');
    titleEl.id = 'tooltip-title';
    titleEl.innerText = title;
    tooltipEl.appendChild(titleEl)

    const contentEl = document.createElement('p');
    contentEl.id = 'tooltip-content';
    contentEl.innerText = content;
    tooltipEl.appendChild(contentEl);

    const buttonEl = document.createElement('button');
    buttonEl.innerText = 'Okay';
    buttonEl.onclick = (e) => {
      e.stopPropagation();
      parentEl.removeChild(document.getElementById('tooltip-wrapper'));
      onClose();
    }

    tooltipEl.appendChild(buttonEl);
    parentEl.appendChild(tooltipEl);
  }
  return {
    showToolTip
  }
}