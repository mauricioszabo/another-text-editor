import { render } from "solid-js/web";
import { Gutter } from "./gutter";
import { ScrollView } from "./ScrollView";

function TextEditor() {
  return (
    <div style="position: relative; contain: strict; overflow: hidden; background-color: inherit; height: 600px; width: 100%;">
      <Gutter />
      <ScrollView />
    </div>
  );
}

function renderEditor(element) {
  //Complete the code here
  render(() => <TextEditor />, element);
}

export { renderEditor };
