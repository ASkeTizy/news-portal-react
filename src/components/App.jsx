import SourcesList from "./SourcesList";
import ArticlesList from "./ArticlesList";
import { useEffect, useState } from "react";

function fetchSources() {
	return fetch('https://newsapi.org/v2/sources?apiKey=221bc63bf1544c9995778a4bf50a64c8')
		.then(response => response.json())
		.then(payload => payload.sources);
}

function fetchArticlesBySources(sourceId) {
	return fetch(`https://newsapi.org/v2/top-headlines?apiKey=221bc63bf1544c9995778a4bf50a64c8&sources=${sourceId}`)
		.then(response => response.json())
		.then(payload => payload.articles)
		;
}
const touches = [];
export default function App() {
	const [sources, setSources] = useState([]);
	const [articles, setArticles] = useState([]);
	const [globals, setGlobals] = useState([]);

	useEffect(() => {
		const promise = fetchSources();
		promise.then(setSources);

		 promise
			.then(([firstSource]) => firstSource.id)
			.then(fetchArticlesBySources)
			.then(setArticles);
		
		
	}, []);
	
	const handleSetSource = (sourceId) => {
		fetchArticlesBySources(sourceId)
		.then(setArticles)
		touches.push(sourceId);
		
		return setGlobals([...globals, ...articles]);
		
	}

	return (
		<>
		<header>
			<h1>News Portal</h1>
		</header>
		<main>
			<SourcesList sources={sources} handleSetSource={handleSetSource} touches={touches}/>
			<ArticlesList articles={globals}/>
		</main>
		<footer>
			<p className="copyright">
				Copyright
				<a href="https://newsapi.org">News Portal</a>
			</p>
		</footer>
		</>
	)
}

