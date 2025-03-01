import React, { createContext, useContext, useReducer } from 'react';
import { Project, Task, TeamMember } from '../types';

interface ProjectState {
  projects: Project[];
  notifications: string[];
}

type ProjectAction =
  | { type: 'ADD_PROJECT'; payload: Project }
  | { type: 'UPDATE_PROJECT'; payload: Project }
  | { type: 'ADD_TASK'; payload: { projectId: string; task: Task } }
  | { type: 'UPDATE_TASK'; payload: { projectId: string; task: Task } }
  | { type: 'ADD_NOTIFICATION'; payload: string };

const initialState: ProjectState = {
  projects: [],
  notifications: [],
};

function projectReducer(state: ProjectState, action: ProjectAction): ProjectState {
  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.id ? action.payload : project
        ),
      };
    case 'ADD_TASK':
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.projectId
            ? { ...project, tasks: [...project.tasks, action.payload.task] }
            : project
        ),
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.projectId
            ? {
                ...project,
                tasks: project.tasks.map((task) =>
                  task.id === action.payload.task.id ? action.payload.task : task
                ),
              }
            : project
        ),
      };
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [action.payload, ...state.notifications],
      };
    default:
      return state;
  }
}

const ProjectContext = createContext<
  | {
      state: ProjectState;
      dispatch: React.Dispatch<ProjectAction>;
    }
  | undefined
>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
}