function CategoryCard({img, title}){
    return(
        <div className="articleChronometry__card">
            <img src={img} alt={title} className="articleChronometry__card__img"/>
            <p className="articleChronometry__card__title">{title}</p>
        </div>
    )
}

export default CategoryCard