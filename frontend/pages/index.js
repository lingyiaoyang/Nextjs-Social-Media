import css from '../styles/home.module.css';
import Card from '../component/card';

export default function Home({ card }) {
  console.log('🚀 -> file: index.js -> line 5 -> Home -> card', card);
  return (
    <div className={`container ${css.header}`}>
      {card.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/cards`);
  const card = await res.json();

  return {
    props: {
      card: card,
    },
  };
}
