import React from 'react';
import { render , fireEvent} from '@testing-library/react'; 
import { Home } from '../pages/Home';


describe('renders Home component', () => {
  const {container} =  render(<Home />);
  
  it('should contain the title', () => {
      expect(container.getElementsByClassName('title').length).toBe(1);
  })
  
  it('should contain the description', () => {
      expect(container.getElementsByClassName('description')).toBeTruthy()
  })
});
