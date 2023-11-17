function HorizontalScrollbar() {
  return (
    <div
      class="horizontal-scrollbar"
      style="position: absolute; contain: content; z-index: 1; will-change: transform; bottom: 0px; left: 0px; right: 10px; height: 15px; overflow: auto hidden; cursor: default;"
    >
      <div style="height: 15px; width: 1044px;"></div>
    </div>
  );
}

export { HorizontalScrollbar };
