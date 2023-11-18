import { Lines } from "./lines";
import { VerticalScrollbar } from "./vertical-scrollbar";
import { HorizontalScrollbar } from "./horizontal-scrollbar";

function ScrollView({ state }) {
  return (
    <div
      class="scroll-view"
      style="position: absolute; contain: strict; overflow: hidden; top: 0px; bottom: 0px; background-color: inherit; left: 67px; width: 1234px;"
    >
      {/* TODO: add For element, each 6 lines add a new Lines component */}
      <Lines state={state} />
      <VerticalScrollbar />
      <HorizontalScrollbar />
      <div
        class="scrollbar-corner"
        style="position: absolute; height: 20px; width: 20px; bottom: 0px; right: 0px; overflow: scroll;"
      ></div>
    </div>
  );
}
export { ScrollView };
