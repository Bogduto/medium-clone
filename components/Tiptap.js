import { useEditor, EditorContent } from '@tiptap/react'
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        showOnlyWhenEditable: true,
        placeholder: 'Tell your story',
      }),
    ],
    editorProps: {
      attributes: {
        class: 'canvas_text',
      },
    },
    onUpdate: ({ editor }) => {
      const text = editor.getText()
    }
  })

  return (
      <EditorContent editor={editor} />
  )
}


export default Tiptap;

