'use client';

import { Download, Github, Linkedin, Star, Twitter, Upload, X } from 'lucide-react';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import type { Portfolio } from '../types/Portfolio';

export const PortfolioDetails = ({ portfolio }: { portfolio: Portfolio }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(portfolio.description);
  const [tags, setTags] = useState(portfolio.tags);
  const [newTag, setNewTag] = useState('');
  const [technologies, setTechnologies] = useState(portfolio.technologies);
  const [newTechnology, setNewTechnology] = useState('');

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const addTechnology = () => {
    if (newTechnology && !technologies.includes(newTechnology)) {
      setTechnologies([...technologies, newTechnology]);
      setNewTechnology('');
    }
  };

  const removeTechnology = (techToRemove: string) => {
    setTechnologies(technologies.filter((tech) => tech !== techToRemove));
  };

  const handleSave = () => {
    // Save the changes to backend
    console.log('Saving updated description:', description);
    console.log('Saving updated tags:', tags);
    console.log('Saving updated technologies:', technologies);
    setIsEditing(false);
  };

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="mb-2 text-2xl font-bold">About</h2>
            {isEditing ? (
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full"
              />
            ) : (
              <p>{description}</p>
            )}
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < Math.floor(portfolio.rating) ? 'fill-current text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
            <span className="ml-2">{portfolio.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-semibold">Technologies</h3>
          <div className="mb-2 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {tech}
                {isEditing && (
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => removeTechnology(tech)}
                  />
                )}
              </Badge>
            ))}
          </div>
          {isEditing && (
            <div className="flex gap-2">
              <Input
                value={newTechnology}
                onChange={(e) => setNewTechnology(e.target.value)}
                placeholder="New technology"
                className="w-full"
              />
              <Button onClick={addTechnology}>Add Technology</Button>
            </div>
          )}
        </div>
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-semibold">Tags</h3>
          <div className="mb-2 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} className="flex items-center gap-1">
                {tag}
                {isEditing && (
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => removeTag(tag)}
                  />
                )}
              </Badge>
            ))}
          </div>
          {isEditing && (
            <div className="flex gap-2">
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="New tag"
                className="w-full"
              />
              <Button onClick={addTag}>Add Tag</Button>
            </div>
          )}
        </div>
        <div className="flex gap-4">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Download Portfolio PDF
          </Button>
          {isEditing && (
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" /> Upload CV
            </Button>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between bg-muted p-6">
        <div className="flex gap-4">
          <a
            href={portfolio.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={portfolio.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={portfolio.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </div>
        {isEditing ? (
          <Button onClick={handleSave}>Save Changes</Button>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Edit Details</Button>
        )}
      </CardFooter>
    </Card>
  );
};
