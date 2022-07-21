import { useEditor, EditorContent } from '@tiptap/react'
import { useCallback } from 'react'
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import Paragraph from '@tiptap/extension-paragraph'
import Heading from '@tiptap/extension-heading'
import Image from '@tiptap/extension-image'

const Tiptap = ({ placeholder, addContent }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Paragraph.configure({
        HTMLAttributes: {
          class: 'content__italic'
        }
      }),
      Heading.configure({
        levels: [3],
        HTMLAttributes: {
          class: 'content__title'
        }
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'content__img',
        }
      }),
      Placeholder.configure({
        showOnlyWhenEditable: true,
        placeholder,
      }),
    ],
    editorProps: {
      attributes: {
        class: 'content__text',
      },
    },
    onUpdate: ({ editor }) => {
      const content = editor.getHTML()
      addContent(content)
    }
  })

  const addImage = useCallback(() => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  if (!editor) return null
  return (
    <div className='canvas'>
      <div className='canvas__toggle'>
        <span className='canvas__toggle__btn' onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          H3
        </span>
        <span className='canvas__toggle__btn' onClick={addImage}>add image</span>
      </div>
      <div className='canvas__editor'>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}


export default Tiptap;