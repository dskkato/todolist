import React from 'react';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from '../components/Footer';

const App: React.FC = () => {
  return (
    <div >
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
