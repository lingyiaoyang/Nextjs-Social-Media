import Card from '../component/card';

export default function Home({ card }) {
  return (
    <div
      style={{
        height: '1000px',
        padding: '15px',
        border: '1px solid red',
        // backgroundColor: 'black',
        marginTop: '10px',
        display: 'flex',
      }}
      className={`container`}
    >
      {card.map((card) => {
        return (
          <div style={{ padding: '5px' }}>
            <Card key={card.id} card={card} />
          </div>
        );
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
