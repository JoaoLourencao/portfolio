import './App.css';
import { FirstContainer } from './components/FirstContainer';
import { Header } from './components/Header';
import { SecondContainer } from './components/SecondContainer';

function App() {
  return (
    <>
      <Header logo='JOÃO LOURENÇÃO' menuItems={['Home', 'Experiências', 'Certificações', 'Contato']} />
      <FirstContainer />
      <SecondContainer />
    </>
  )
}

export default App
