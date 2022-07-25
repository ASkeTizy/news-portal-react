export default function Article({author, title, description,  urlToImage, publishedAt, source, ind}) {
	const date = publishedAt.slice(0, 10)
                .split('-')
                .reverse()
                .join('-');
   let news_item = ind % 2 == 0 ? "news__item" : "news__item alt"            
	return (
		<div className={news_item}> 
			<div className="news__meta">
				<div className="news__meta-photo" style={{backgroundImage: `url(${urlToImage})`}}></div>
				<ul className="news__meta-details">
					<li className="news__meta-author">{author}</li>
					<li className="news__meta-date">{date}</li>
				</ul>
			 </div>
			 <div className="news__description">
			 
				 	<h2 className="news__description-title">{title}</h2>
				 	<h3 className="news__description-source">{source.name || author}</h3>
				  <p className="news__description-content">{description}</p>		
				  <p className="news__read-more">
				  	<a href="{url}">Read More</a>
				  </p>				
			 	
			 </div>
		</div>	
	)
}