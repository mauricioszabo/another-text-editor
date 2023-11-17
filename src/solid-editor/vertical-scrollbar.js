function VerticalScrollbar() {
  return (
    <div
      class="vertical-scrollbar"
      style="position: absolute; contain: content; z-index: 1; will-change: transform; visibility: hidden; right: 0px; top: 0px; bottom: 10px; width: 15px; overflow: hidden auto; cursor: default;"
    >
      <div style="width: 15px; height: 630px;"></div>
    </div>
  );
}

export { VerticalScrollbar };
