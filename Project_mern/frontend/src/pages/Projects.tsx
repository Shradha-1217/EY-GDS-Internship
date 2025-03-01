import React, { useState } from 'react';
import { useProject } from '../context/ProjectContext';
import { CheckCircle, Clock, AlertCircle, MoreVertical, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProjectStatus } from '../types';

export default function Projects() {
  const { state } = useProject();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<ProjectStatus | 'ALL'>('ALL');

  const statusColors = {
    ACTIVE: 'text-green-600 bg-green-100',
    COMPLETED: 'text-blue-600 bg-blue-100',
    PENDING: 'text-yellow-600 bg-yellow-100',
  };

  const statusIcons = {
    ACTIVE: CheckCircle,
    COMPLETED: Clock,
    PENDING: AlertCircle,
  };

  const filteredProjects = state.projects.filter(
    (project) => filter === 'ALL' || project.status === filter
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h1>
        <button
          onClick={() => navigate('/new-project')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="w-5 h-5" />
          New Project
        </button>
      </div>

      <div className="flex gap-2 mb-6">
        {['ALL', 'ACTIVE', 'COMPLETED', 'PENDING'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status as ProjectStatus | 'ALL')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === status
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {status.charAt(0) + status.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No projects found</p>
          </div>
        ) : (
          filteredProjects.map((project) => {
            const StatusIcon = statusIcons[project.status];
            return (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {project.description}
                    </p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Progress</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {project.teamMembers.slice(0, 3).map((member) => (
                        <img
                          key={member.id}
                          src={member.avatar}
                          alt={member.name}
                          className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                        />
                      ))}
                      {project.teamMembers.length > 3 && (
                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                          <span className="text-xs text-gray-600 dark:text-gray-300">
                            +{project.teamMembers.length - 3}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className={`px-3 py-1 rounded-full text-sm ${statusColors[project.status]}`}>
                      <div className="flex items-center gap-1.5">
                        <StatusIcon className="w-4 h-4" />
                        <span>{project.status.charAt(0) + project.status.slice(1).toLowerCase()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Deadline</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {new Date(project.deadline).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}