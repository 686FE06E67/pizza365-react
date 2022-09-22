import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './components/footer/FooterComponent';
import HeadComponent from './components/header/HeadComponent';
import ContentComponent from './components/content/ContentCoponent';

function App() {
  return (
    <div>
      <body className='min-vh-100'>
        {/* Navbar + Title*/}
        <HeadComponent />

        {/* Content */}
        <ContentComponent />

      </body>
      {/* Footer */}
      <FooterComponent />
    </div>
  );
}

export default App;
