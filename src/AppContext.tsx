import React from 'react';

const initialContext: {
  charges: Array<{name: string; price: number}>;
  setCharges: any;
} = {charges: [], setCharges: ''};

const AppContext = React.createContext(initialContext);

export default AppContext;
