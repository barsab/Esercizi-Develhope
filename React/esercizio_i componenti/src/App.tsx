import Hello from './Hello.tsx';
import Message from './Message.tsx';


function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <h4>8. Puoi utilizzare il componente Hello più di una volta nel componente App? Cosa succede se lo fai?</h4>
      <p>Sì! Ogni istanza di Hello viene renderizzata indipendentemente, quindi il messaggio apparirà tante volte quante sono le chiamate. In questo esercizio il componente Hello viene renderizzato 3 volte.</p>
      <hr />
      <Message />
      <h4>9. Puoi renderizzare il componente Message direttamente all'interno del componente App? Cosa succede se lo fai?</h4>
      <p>Sì, il componente Message può essere renderizzato direttamente in App in quanto è un normale componente React.</p>
    </div>
  );
}

export default App;
