export default function Source({id, name, active,  handleSetSource}) {
	const className = (active == true) ? "source__item__focus" : "source__item";
	console.log(className)
	return (
		<div onClick={()=>handleSetSource(id)} className={className}>		 
			<span className="source__item-name">{name}</span>				
		</div>
	)
}