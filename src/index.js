const {pulsarTextEditor} = require('./text-editor/index');

function createEditor() {
  const editor = document.createElement('atom-text-editor')
  pulsarTextEditor.renderEditor(editor)
  return editor
}

async function main() {
  const pane = document.querySelector('atom-pane')
  const editor = createEditor()
  // editor.element.onkeydown = editorKeyDown(editor)
  pane.appendChild(editor)
}
main()
