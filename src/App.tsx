export interface AppProps {
  title?: string;
}

export function App({ title = 'test-for-internal-frontend' }: AppProps) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}