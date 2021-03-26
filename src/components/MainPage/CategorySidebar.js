import { Link } from 'react-router-dom';
import SidebarCard from './SidebarCard';

function CategorySidebar(props) {
  function renderCategoryCards(categories) {
    return categories.map((category, index) => {
      return (
        <Link key={category._id} to={`/categories/${category._id}`}>
          <SidebarCard
            index={index}
            categoryName={category.categoryName}
          />
        </Link>
      );
    });
  }

  return (
    <aside>
      <ul>
        {renderCategoryCards(props.categories)}
      </ul>
    </aside>
  );
}

export default CategorySidebar;
