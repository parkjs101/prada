import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import MainPoster from './Components/MainPoster';
import CommentContainer from './Components/CommentContainer';
import PosterColorButtonContainer from './Components/ColorPosterButtonContainer';
import ColorPosterContainer from './Components/ColorPosterContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Section>
        <CommentContainer />
        <MainPoster />
      </Section>
      <Section>
        <CommentContainer />
      </Section>
      <Section>
        <ColorPosterContainer/>
        <PosterColorButtonContainer/>
      </Section>
      <Section></Section>
    </div>
  );
}

export default App;
