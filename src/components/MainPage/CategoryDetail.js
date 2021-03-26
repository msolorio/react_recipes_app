function CategoryDetail(props) {
  return (
    <div className="category-detail">
      <div>
        <h2>{props.category && props.category.categoryName}</h2>
        <h4>{props.category && props.category.country}</h4>
      </div>
      <img className="category-img" src={props.category && props.category.categoryImg} alt=""/>
    </div>
  );
};

export default CategoryDetail;
