function Cursors() {
  return (
    <div
      class="cursors"
      style="position: absolute; contain: strict; z-index: 1; width: 1044px; height: 630px; pointer-events: none; user-select: none;"
    >
      <input
        class="hidden-input"
        tabindex="-1"
        style="position: absolute; width: 1px; height: 30px; top: 600px; left: 0px; opacity: 0; padding: 0px; border: 0px;"
      />
      <div
        class="cursor"
        style="height: 30px; width: 11.7344px; transform: translate(0px, 600px);"
      ></div>
    </div>
  );
}

export { Cursors };
