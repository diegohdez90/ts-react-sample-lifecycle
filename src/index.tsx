import client from 'react-dom/client';
import App from './App';

const root = client.createRoot(document.getElementById('root') as unknown as Element);

root.render(<App />);
