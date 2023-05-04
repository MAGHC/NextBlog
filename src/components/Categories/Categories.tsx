import style from './Categories.module.css';

type Props = {
  categories: string[];
  handleClick: (arg: string) => void;
};

const Categories = ({ categories, handleClick }: Props) => {
  return (
    <section>
      <h1 className={style.category}>Category</h1>
      <ul className={style.categories}>
        {categories.map((category, idx) => {
          return (
            <li key={idx}>
              <a href="#" onClick={() => handleClick(category)}>
                {category}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Categories;
