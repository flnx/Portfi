'use client';

import { Plus } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import type { Project } from '../types/Portfolio';

export const ProjectList = ({ projects }: { projects: Project[] }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newProject, setNewProject] = useState({ title: '', description: '' });

  const handleAddProject = () => {
    // save the new project to backend
    setIsAdding(false);
    setNewProject({ title: '', description: '' });
  };

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-2xl font-bold">More Projects</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
        {isAdding && (
          <Card>
            <CardHeader>
              <Input
                placeholder="Project Title"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
              />
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Project Description"
                value={newProject.description}
                onChange={(e) =>
                  setNewProject({ ...newProject, description: e.target.value })
                }
              />
              <Button className="mt-4" onClick={handleAddProject}>
                Add Project
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
      {!isAdding && (
        <Button className="mt-4" onClick={() => setIsAdding(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add New Project
        </Button>
      )}
    </div>
  );
};
