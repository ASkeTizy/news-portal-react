import Source from './Source';

export default function SourcesList({ sources, handleSetSource, touches }) {
	
	const indexes = sources.map((source) => source.id);
	
	for(let i = 0; i < touches.length; i++) {
		const k = indexes.indexOf(touches[i]);

		if (k >= 0) sources[k].active = true;
	}
	
	const content = sources.map((source) => <Source key={source.id} {...source} handleSetSource={handleSetSource} />);

	return (
		<div className='sources'>{content}</div>
	);
}