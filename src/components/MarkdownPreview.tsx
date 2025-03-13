import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

const MarkdownPreview = ({ markdown }: { markdown: string }) => {
	return (
		<div className='p-4 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700'>
			<Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
				{markdown}
			</Markdown>
		</div>
	)
}

export default MarkdownPreview
