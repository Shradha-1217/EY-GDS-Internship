import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ProjectProvider } from './context/ProjectContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import NewProject from './pages/NewProject';
import Projects from './pages/Projects';
import Team from './pages/Team';

function App() {
  return (
    <ThemeProvider>
      <ProjectProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/new-project" element={<NewProject />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/team" element={<Team />} />
            </Route>
          </Routes>
        </Router>
      </ProjectProvider>
    </ThemeProvider>
  );
}

export default App;