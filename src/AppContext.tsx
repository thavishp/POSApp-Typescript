import React from 'react';
import {Charge} from './types';

const initialContext: {
  charges: Array<Charge>;
  setCharges: any;
} = {charges: [], setCharges: ''};

const AppContext = React.createContext(initialContext);

export default AppContext;
