import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import BarChart from './BarChart';
import Plotly from './Plotly';

const App: React.FC = () => {
  return (
    <div >
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <BarChart />
      <Plotly />
    </div>
  );
}

export default App;
