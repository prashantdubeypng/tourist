import { Shield, Users, Database, Settings, BarChart3, Globe, Activity, AlertTriangle, Clock, TrendingUp, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/ThemeToggle";

const SuperAdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background pattern-mountain">
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">System Administration</h1>
              <p className="text-sm text-muted-foreground">Full System Control & Analytics</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" asChild>
              <a href="/login">Logout</a>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-cultural border-0">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <span className="text-sm font-medium">Active Users</span>
                <Users className="h-4 w-4 text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">+12%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <span className="text-sm font-medium">Emergency Alerts</span>
                <AlertTriangle className="h-4 w-4 text-accent" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-accent">Active incidents</span>
              </p>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <span className="text-sm font-medium">Response Time</span>
                <Clock className="h-4 w-4 text-secondary" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.3m</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-secondary">Average response</span>
              </p>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <span className="text-sm font-medium">System Health</span>
                <Activity className="h-4 w-4 text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99.8%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">Uptime</span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analytics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>User Distribution</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Tourists</span>
                  <span>847 (68%)</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Police Officers</span>
                  <span>156 (12%)</span>
                </div>
                <Progress value={12} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Transport Operators</span>
                  <span>234 (19%)</span>
                </div>
                <Progress value={19} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Administrators</span>
                  <span>10 (1%)</span>
                </div>
                <Progress value={1} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Regional Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Assam</span>
                <Badge variant="outline">342 users</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Meghalaya</span>
                <Badge variant="outline">198 users</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Arunachal Pradesh</span>
                <Badge variant="outline">156 users</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Nagaland</span>
                <Badge variant="outline">134 users</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Manipur</span>
                <Badge variant="outline">123 users</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Tripura</span>
                <Badge variant="outline">98 users</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Mizoram</span>
                <Badge variant="outline">87 users</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Sikkim</span>
                <Badge variant="outline">109 users</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-secondary" />
                <span>System Status</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Blockchain Network</span>
                <Badge className="bg-primary/20 text-primary">Operational</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">AI Emergency Detection</span>
                <Badge className="bg-primary/20 text-primary">Active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Geofencing Services</span>
                <Badge className="bg-primary/20 text-primary">Running</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Cultural Database</span>
                <Badge className="bg-primary/20 text-primary">Synced</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Emergency Network</span>
                <Badge className="bg-primary/20 text-primary">24/7 Active</Badge>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                <Settings className="h-4 w-4 mr-2" />
                System Settings
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2">
            <Globe className="h-5 w-5" />
            <span className="text-xs">Global Dashboard</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2">
            <AlertTriangle className="h-5 w-5" />
            <span className="text-xs">Emergency Control</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2">
            <TrendingUp className="h-5 w-5" />
            <span className="text-xs">Analytics Report</span>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2">
            <Phone className="h-5 w-5" />
            <span className="text-xs">Emergency Contacts</span>
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            For support: <a href="mailto:dishantvaswani7@gmail.com" className="text-primary hover:underline">dishantvaswani7@gmail.com</a> | 
            <a href="https://www.linkedin.com/in/dishant-vaswani/" className="text-primary hover:underline ml-2">LinkedIn</a> | 
            <a href="https://github.com/Dishant-V" className="text-primary hover:underline ml-2">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;