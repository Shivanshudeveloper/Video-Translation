git remote add origin git@github.com:aniketbiprojit/TextEditFinal.git
git push -u origin masterimport React from 'react';
import ReactDOM from 'react-dom';
import ReactSpeech from './ReactSpeech';

it('ReactSpeech component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactSpeech />, div);
});
