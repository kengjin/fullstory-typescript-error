import React from 'react';
import { render } from 'react-dom';
import FullStory from 'react-fullstory';

const App = (): JSX.Element => <FullStory org="12345" />;

render(<App />, document.getElementById('root'));
