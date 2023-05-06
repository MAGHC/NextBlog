import style from './Categories.module.css';

type Props = {
  categories: string[];
  handleClick: (arg: string) => void;
  nowCategory: string;
};

const Categories = ({ categories, handleClick, nowCategory }: Props) => {
  return (
    <section>
      <h1 className={style.category}>Category</h1>
      <ul className={style.categories}>
        {categories.map((category, idx) => {
          return (
            <li key={idx}>
              <a
                className={category === nowCategory ? style.selected : ''}
                href="#"
                onClick={() => handleClick(category)}
              >
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
