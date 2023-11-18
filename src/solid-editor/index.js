import { render } from "solid-js/web";
import { createStore } from "solid-js/store";
import { Gutter } from "./gutter";
import { ScrollView } from "./ScrollView";

function TextEditor({ state }) {
  return (
    <div style="position: relative; contain: strict; overflow: hidden; background-color: inherit; height: 600px; width: 100%;">
      <Gutter state={state} />
      <ScrollView state={state} />
    </div>
  );
}

function renderEditor(element) {
  const store = createStore({
    // TODO: remove hard coded stuff
    rowsToRender: [0, 1, 2, 3, 4],
    // TODO: try to understand measurements
    lineHeightInPixels: 30,
  });
  render(() => <TextEditor state={store[0]} />, element);
  return store[1];
}

export { renderEditor };
