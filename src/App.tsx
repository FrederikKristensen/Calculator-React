import { useState } from 'react';
import Keys from './components/Keys.tsx';

function App() {
  return (
    <div className='bg-sky-900 min-h-screen'>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand"></div>
          <div className="current-operand"></div>
        </div>
        
        <Keys/>

      </div>
    </div>
  );
}

export default App;
