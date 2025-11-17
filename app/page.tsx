import Greeting from '../components/Greeting';

export default function Home() {
  return (
    <main className="container">
      <section className="card">
        <h1>Hello</h1>
        <p>Welcome to your freshly deployed Next.js app.</p>
        <Greeting />
      </section>
      <footer>
        <a href="https://nextjs.org" target="_blank" rel="noreferrer">Learn Next.js</a>
      </footer>
    </main>
  );
}
