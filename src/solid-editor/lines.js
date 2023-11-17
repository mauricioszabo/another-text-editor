import { Cursors } from "./cursors";

function Lines() {
  return (
    <div style="contain: strict; overflow: hidden; background-color: inherit; width: 1044px; height: 630px; will-change: transform; transform: translate(0px, 0px);">
      <div
        class="lines"
        style="position: absolute; contain: strict; overflow: hidden; width: 1044px; height: 630px;"
      >
        <div
          class="highlights"
          style="contain: strict; position: absolute; overflow: hidden; user-select: none; height: 630px; width: 1044px;"
        ></div>
        {/* TODO: add a FOR element in this block, each 6 lines we need a new div with other lines */}
        <div style="contain: layout style; position: absolute; height: 180px; width: 1044px; transform: translateY(0px);">
          <div class="line" data-screen-row="0">
            <span>Hello world</span>
          </div>
          <div class="line" data-screen-row="1">
            <span>testing new lines</span>
          </div>
          <div class="line" data-screen-row="2">
            <span> </span> {/*ISNT WORKING, need one space inside the span*/}
          </div>
          <div class="line" data-screen-row="3">
            <span>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
          </div>
          <div class="line cursor-line" data-screen-row="4">
            <span class=""></span>
          </div>
        </div>
        <Cursors />
      </div>
    </div>
  );
}

export { Lines };
