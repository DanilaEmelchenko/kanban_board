import { BrowserRouter } from 'react-router-dom';
import './assets/styles/App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { TasksProvider } from './context';
import AppRouter from './components/AppRouter/AppRouter';

function App() {
  return (
    <TasksProvider>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </TasksProvider>
  )
}

export default App;
