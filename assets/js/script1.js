console.clear();

const { useCallback, useRef, useState } = React;
const { render } = ReactDOM;


const CHARS = 'abcdefghijklmnopqrstuvwxyz';
const SYMBOLS = '.,-_%$&!=?+/(){}<>';

function random(to, from = 0) {
  return Math.floor(Math.random() * to) + from;
}

const randomNumber = () => random(10);
const randomUpper = () => CHARS[random(CHARS.length)].toUpperCase();
const randomLower = () => CHARS[random(CHARS.length)].toLowerCase();
const randomSymbols = () => SYMBOLS[random(SYMBOLS.length)];


function App() {
  const [output, setOutput] = useState('');
  const [length, setLength] = useState(20);
  const [hasNumbers, setHasNumbers] = useState(true);
  const [hasUpper, setHasUpper] = useState(true);
  const [hasLower, setHasLower] = useState(true);
  const [hasSymbols, setHasSymbols] = useState(true);
  
  const outputRef = useRef();
  
  const generatePassword = useCallback(() => {
    if (!(hasNumbers || hasUpper || hasLower || hasSymbols)) return;
    
    const functions = [];
    if (hasNumbers) functions.push(randomNumber);
    if (hasUpper) functions.push(randomUpper);
    if (hasLower) functions.push(randomLower);
    if (hasSymbols) functions.push(randomSymbols);

    const cleanLength = length <= 1 ? 1 : length >= 512 ? 512 : length;
    let result = '';
    for (let i = 0; i < cleanLength; i++) {
      result += functions[random(functions.length)]();
    }
    
    console.log(result);
    setOutput(result);
  }, [length, hasNumbers, hasUpper, hasLower, hasSymbols]);
  
  const copy = useCallback(() => {
    outputRef.current.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
  }, [])
  
  return (
    <div className="password-generator">
      <h1>Password Generator</h1>
      
      <div>
        <textarea id="output" readOnly rows={1} cols={32} value={output} ref={outputRef} placeholder="Generate password"/>
        <button onClick={copy}>Copy to clipboard</button>
      </div>
      
      <br />
      
      <div className="form-control">
        <label htmlFor="length">length (min = 1, max = 512)</label>
        <input type="number" min={1} max={512} id="length" value={length} onChange={e => setLength(parseInt(e.target.value, 10))} />
      </div>
      <div className="form-control">
        <input type="checkbox" id="hasNumbers" checked={hasNumbers} onChange={e => setHasNumbers(e.target.checked)} />
        <label htmlFor="hasNumbers">hasNumbers</label>
      </div>
      <div className="form-control">
        <input type="checkbox" id="hasUpper" checked={hasUpper} onChange={e => setHasUpper(e.target.checked)} />
        <label htmlFor="hasUpper">hasUpper</label>
        </div>
      <div className="form-control">
        <input type="checkbox" id="hasLower" checked={hasLower} onChange={e => setHasLower(e.target.checked)} />
        <label htmlFor="hasLower">hasLower</label>
        </div>
      <div className="form-control">
        <input type="checkbox" id="hasSymbols" checked={hasSymbols} onChange={e => setHasSymbols(e.target.checked)} />
        <label htmlFor="hasSymbols">hasSymbols</label>
      </div>
      
      <br />

      <button onClick={generatePassword}>Generate!</button>
    </div>
  );
}


render(<App />, document.getElementById('root'));
