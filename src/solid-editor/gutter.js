function Gutter() {
  const gutterHeight = 30;
  return (
    <div class="gutter-container" id="gutter-container">
      <div style="will-change: transform; display: flex; transform: translateY(0px);">
        <div
          class="gutter line-numbers"
          style={`position: relative; height: ${gutterHeight}px;`}
        >
          <div class="line-number dummy" style="visibility: hidden;">
            00
            <div class="icon-right"></div>
          </div>
          {/* TODO: add a FOR element to iterate lines*/}
          <div
            style={`contain: layout style; position: absolute; top: 0px; height: ${gutterHeight}px; transform: translateY(0px); width: 67px;`}
          >
            <div class="line-number" style="width: 67px;">
              1<div class="icon-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Gutter };
