import Article from './Article';

export default function ArticlesList({ articles }) {
	const content = articles.map((article, ind) => <Article key={ind} {...article} ind={ind}/>);
	
	return (
		<div>{content}</div>
	);
}