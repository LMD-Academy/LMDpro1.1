
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Users, BookCheck, Settings, Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const teamMembers = [
  { id: "usr1", name: "Elena Rodriguez", email: "elena.r@examplecorp.com", coursesAssigned: 5, progress: 85, lastActive: "2 hours ago" },
  { id: "usr2", name: "Ben Carter", email: "ben.c@examplecorp.com", coursesAssigned: 3, progress: 40, lastActive: "1 day ago" },
  { id: "usr3", name: "Aisha Khan", email: "aisha.k@examplecorp.com", coursesAssigned: 6, progress: 100, lastActive: "5 hours ago" },
  { id: "usr4", name: "Mark Chen", email: "mark.c@examplecorp.com", coursesAssigned: 4, progress: 15, lastActive: "3 days ago" },
  { id: "usr5", name: "Sophia Loren", email: "sophia.l@examplecorp.com", coursesAssigned: 5, progress: 70, lastActive: "Yesterday" },
];

export default function IamPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-headline font-bold mb-2 animated-text-gradient">IAM Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Administer your team's learning, track progress, and manage assignments.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-headline flex items-center justify-between">
              Active Users <Users className="h-5 w-5 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">125</p>
            <p className="text-xs text-muted-foreground">+5 this month</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-headline flex items-center justify-between">
              Avg. Progress <BookCheck className="h-5 w-5 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">68%</p>
            <p className="text-xs text-muted-foreground">Across all assigned courses</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-headline flex items-center justify-between">
              Courses Assigned <BarChart className="h-5 w-5 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">42</p>
            <p className="text-xs text-muted-foreground">To various teams</p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-headline flex items-center justify-between">
              Admin Settings <Settings className="h-5 w-5 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-3xl font-bold text-transparent select-none">.</p>
             <Button variant="outline" className="w-full">Manage Roles</Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">Team Learning Progress</CardTitle>
            <CardDescription>Monitor individual progress and activity across your teams.</CardDescription>
            <div className="pt-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search team members..." className="pl-9 focus-gradient-outline" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Courses Assigned</TableHead>
                  <TableHead className="w-[200px]">Overall Progress</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamMembers.map((member) => (
                  <TableRow key={member.id} className="hover:bg-muted/30">
                    <TableCell>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground">{member.email}</div>
                    </TableCell>
                    <TableCell className="text-center">{member.coursesAssigned}</TableCell>
                    <TableCell>
                      <Progress value={member.progress} className="h-2" />
                      <span className="text-xs text-muted-foreground">{member.progress}% complete</span>
                    </TableCell>
                    <TableCell>
                        {member.progress === 100 ? (
                             <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">Completed All</Badge>
                        ) : member.progress > 50 ? (
                             <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">In Progress</Badge>
                        ) : (
                             <Badge variant="destructive" className="bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300">Needs Attention</Badge>
                        )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
           <CardFooter>
            <p className="text-xs text-muted-foreground">
              For more detailed analytics and reporting, visit the Reporting & Analytics section.
            </p>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
