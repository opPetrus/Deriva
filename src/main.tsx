import {createRoot} from 'react-dom/client';import App from './App';import {ProgressProvider} from './storage/ProgressProvider';import 'katex/dist/katex.min.css';import './styles.css';
import {ErrorBoundary} from './components/ErrorBoundary';
createRoot(document.getElementById('root')!).render(<ErrorBoundary><ProgressProvider><App/></ProgressProvider></ErrorBoundary>);
