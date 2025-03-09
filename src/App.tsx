import { Route, Routes } from "react-router";

import ThemeProvider from "./Contexts/ThemeProvider";
import Layout from "./layouts/Layout";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<TodoList/>}>
          </Route>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
