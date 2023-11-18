import { For } from "solid-js";
// import { Cursors } from "./cursors";

function Lines({ state }) {
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
        <div style="contain: layout style; position: absolute; height: 180px; width: 1044px; transform: translateY(0px);">
          <For each={state.rowsToRender}>
            {(row) => (
              <div class="line" data-screen-row="0">
                <span>Hello world</span>
              </div>
            )}
          </For>
        </div>
        {/* TODO: add cursor behavior */}
        {/* <Cursors /> */}
      </div>
    </div>
  );
}

export { Lines };
