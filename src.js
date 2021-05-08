import { render, h } from 'preact';
import Markdown from 'preact-markdown'

render(h(App), document.getElementById('app'));

function App() {
  // return 'hi'
  // return Markdown('# Heading')
  // console.log(`Markdown:`, Markdown);
  return h(Markdown, { markdown: '# Heading' });
  // return h(Markdown, {}, '# Heading');
}
