import React from 'react';
import {Charge} from './types';

const initialContext: {
  charges: Array<Charge>;
  setCharges: any;
  items: Array<{name: string; price: number}>;
  setItems: any;
} = {charges: [], setCharges: '', items: [], setItems: ''};

const AppContext = React.createContext(initialContext);

export default AppContext;
