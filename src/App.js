import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuizApp from './Components/QuizApp';
import { SelectedAnswerProvider } from './Components/SelectedAnswerContext';

function App() {
  return (
    <>
      <SelectedAnswerProvider>
        <QuizApp timerDuration={15} />
      </SelectedAnswerProvider>
    </>
  );
}

export default App;
