/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe ("Testing",()=>{
  
  test("pastikan ada ada +",()=>{
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(<App/>);
    const counterApp = component.getByText("+");
    expect(counterApp).toBeInTheDocument();
  }
  )
}
)
