import "./App.css";
import ThemeProvider from "./Contexts/ThemeProvider";
import Layout from "./layouts/Layout";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <h3>home</h3>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
