"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  summary?: string;
  highlights?: string[];
}

export default function ExperienceTimeline({
  experiences,
  primaryColor = '#3B82F6',
}: {
  experiences: ExperienceItem[];
  primaryColor?: string;
}) {
  if (!experiences || experiences.length === 0) return null;

  return (
    <Card className="border-none shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Briefcase className="h-5 w-5" style={{ color: primaryColor }} />
          <span>Experiências</span>
        </CardTitle>
        <CardDescription>
          Uma linha do tempo das experiências profissionais mais relevantes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="relative border-l border-gray-200">
          {experiences.map((exp, idx) => (
            <li key={`${exp.company}-${exp.title}-${idx}`} className="mb-8 ml-6">
              <span
                className="absolute -left-1.5 mt-2 flex h-3 w-3 items-center justify-center rounded-full border border-white"
                style={{ backgroundColor: primaryColor }}
              />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {exp.title}
                  </h3>
                  <div className="mt-1">
                    <Badge variant="secondary">{exp.company}</Badge>
                  </div>
                </div>
                <div className="text-sm text-gray-600 whitespace-nowrap">{exp.period}</div>
              </div>

              {exp.summary && (
                <p className="mt-3 text-gray-700">{exp.summary}</p>
              )}

              {Array.isArray(exp.highlights) && exp.highlights.length > 0 && (
                <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
