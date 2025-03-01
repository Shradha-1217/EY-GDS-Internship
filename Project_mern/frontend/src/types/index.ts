export type Status = 'TO_DO' | 'IN_PROGRESS' | 'COMPLETED';
export type ProjectStatus = 'ACTIVE' | 'COMPLETED' | 'PENDING';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;
  assignedTo: TeamMember[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  deadline: Date;
  progress: number;
  tasks: Task[];
  teamMembers: TeamMember[];
  createdAt: Date;
  updatedAt: Date;
}