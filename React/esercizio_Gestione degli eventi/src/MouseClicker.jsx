import one from './assets/one.svg';

function MouseClicker() {
 function handleButton(event) {
    console.log('Pulsante:', event.currentTarget.name);
 }

 function handleIcon(event) {
    event.stopPropagation(); //4️⃣ impedisco che l'attributo name del pulsante venga stampato nella console quando si clicca sull'immagine
    console.log('Icona:', event.target.src);
 }
 
 return (
    <button name="one" onClick={handleButton}>
     <img
        src={one}
        alt="Icona numero 1"
        width="20"
        height="20"
        style={{ verticalAlign: 'text-bottom' }}
        onClick={handleIcon}
      />
      Cliccami
    </button>
 )
}

export default MouseClicker;

/* Risposta 3️⃣
L'attributo name del pulsante viene comunque stampato nella console quando si clicca sull'immagine perché:
1. Stiamo gestendo eventi su elementi annidati;
2. Il gestore `onClick` sull'immagine viene eseguito per primo;
3. Dopo l'esecuzione del click sull'icona, l'evento si propaga verso l'alto e raggiunge il pulsante padre;
4. Il pulsante ha, a sua volta, un event handler associato all'evento `onClick` che stampa il suo attributo `name` tramite `event.currentTarget.name`.
*/