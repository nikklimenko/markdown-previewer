import { useState } from 'react'
import './App.css'
import MarkdownPreview from './components/MarkdownPreview'

function App() {
	const [markdown, setMarkdown] = useState('')

	return (
		<>
			<textarea
				className='w-full max-w-2xl h-40 p-2 border rounded-lg'
				value={markdown}
				onChange={e => setMarkdown(e.target.value)}
			/>
			<div className='bg-gray-100 p-4 rounded-lg mt-4'>
				<MarkdownPreview markdown={markdown} />
			</div>
		</>
	)
}

export default App
