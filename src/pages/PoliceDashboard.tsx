import { useState } from "react";
import { Shield, AlertTriangle, MapPin, Users, Clock, Eye, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const PoliceDashboard = () => {
  const [activeIncidents, setActiveIncidents] = useState(3);

  const emergencyAlerts = [
    {
      id: "SOS-001",
      type: "Emergency",
      location: "Kaziranga National Park",
      time: "2 min ago",
      status: "Active",
      priority: "High",
      tourist: "Sarah Johnson",
      blockchainId: "BLK-NE-TOUR-045"
    },
    {
      id: "INC-002", 
      type: "Incident Report",
      location: "Shillong City Center",
      time: "15 min ago",
      status: "Investigating",
      priority: "Medium",
      tourist: "Rajesh Kumar",
      blockchainId: "BLK-NE-TOUR-023"
    },
    {
      id: "ALT-003",
      type: "Safety Alert",
      location: "Tawang Road",
      time: "1 hour ago", 
      status: "Monitoring",
      priority: "Low",
      tourist: "Multiple",
      blockchainId: "N/A"
    }
  ];

  const incidentHeatmapData = [
    { area: "Guwahati Central", incidents: 12, level: "Medium", trend: "+2%" },
    { area: "Kaziranga Buffer", incidents: 3, level: "Low", trend: "-15%" },
    { area: "Shillong Hills", incidents: 8, level: "Medium", trend: "+5%" },
    { area: "Tawang Border", incidents: 1, level: "Low", trend: "0%" },
    { area: "Majuli Island", incidents: 2, level: "Low", trend: "-8%" }
  ];

  const patrolUnits = [
    { id: "UNIT-01", officer: "Inspector Sharma", location: "Guwahati Sector 1", status: "Active", lastUpdate: "5 min" },
    { id: "UNIT-02", officer: "ASI Borah", location: "Kaziranga Patrol", status: "Active", lastUpdate: "12 min" },
    { id: "UNIT-03", officer: "Constable Das", location: "Shillong Central", status: "Break", lastUpdate: "25 min" },
    { id: "UNIT-04", officer: "Inspector Gogoi", location: "Tawang Highway", status: "Active", lastUpdate: "8 min" }
  ];

  const handleEmergencyResponse = (incidentId: string) => {
    alert(`Dispatching emergency response for ${incidentId}`);
  };

  const handleViewDetails = (incidentId: string) => {
    alert(`Viewing detailed report for ${incidentId}`);
  };

  return (
    <div className="min-h-screen bg-background pattern-mountain">
      {/* Header */}
      <header className="bg-destructive/10 backdrop-blur-sm border-b border-destructive/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Shield className="h-8 w-8 text-destructive" />
            <div>
              <h1 className="text-xl font-bold text-destructive">Police Command Center</h1>
              <p className="text-sm text-muted-foreground">North East India Security Operations</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className="bg-destructive/20 text-destructive border-destructive/30">
              {activeIncidents} Active Incidents
            </Badge>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
              On Duty
            </Badge>
            <Button variant="outline" asChild>
              <a href="/login">Logout</a>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Emergency Alerts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Emergency Response Dashboard */}
            <Card className="card-cultural border-0 border-l-4 border-l-destructive">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                  <span>Live Emergency Alerts</span>
                </CardTitle>
                <CardDescription>Real-time incident monitoring and response coordination</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {emergencyAlerts.map((alert, index) => (
                  <div key={index} className={`p-4 border rounded-lg ${
                    alert.priority === 'High' ? 'border-destructive/50 bg-destructive/5' :
                    alert.priority === 'Medium' ? 'border-accent/50 bg-accent/5' :
                    'border-primary/50 bg-primary/5'
                  }`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <Badge className={`${
                            alert.priority === 'High' ? 'bg-destructive text-destructive-foreground' :
                            alert.priority === 'Medium' ? 'bg-accent text-accent-foreground' :
                            'bg-primary text-primary-foreground'
                          }`}>
                            {alert.priority}
                          </Badge>
                          <Badge variant="outline">{alert.id}</Badge>
                        </div>
                        <h4 className="font-semibold mt-2">{alert.type}</h4>
                        <p className="text-sm text-muted-foreground">{alert.tourist} • {alert.blockchainId}</p>
                      </div>
                      <Badge variant="outline" className={`${
                        alert.status === 'Active' ? 'border-destructive text-destructive' :
                        alert.status === 'Investigating' ? 'border-accent text-accent' :
                        'border-primary text-primary'
                      }`}>
                        {alert.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{alert.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{alert.time}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      {alert.status === 'Active' && (
                        <Button 
                          size="sm" 
                          className="bg-destructive hover:bg-destructive/90"
                          onClick={() => handleEmergencyResponse(alert.id)}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Dispatch Response
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleViewDetails(alert.id)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Navigation className="h-4 w-4 mr-2" />
                        Navigate
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Incident Heatmap */}
            <Card className="card-cultural border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Incident Heatmap Analysis</span>
                </CardTitle>
                <CardDescription>Area-wise incident distribution and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {incidentHeatmapData.map((area, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-card/50 border border-border/50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{area.area}</h4>
                        <div className="flex items-center space-x-3 mt-1">
                          <Badge className={`${
                            area.level === 'Medium' ? 'bg-accent/20 text-accent' : 'bg-primary/20 text-primary'
                          }`}>
                            {area.level} Risk
                          </Badge>
                          <span className="text-sm text-muted-foreground">{area.incidents} incidents</span>
                          <span className={`text-sm ${
                            area.trend.startsWith('+') ? 'text-destructive' : 'text-primary'
                          }`}>
                            {area.trend}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{area.incidents}</div>
                        <div className="text-xs text-muted-foreground">This Week</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-destructive">26</div>
                    <div className="text-sm text-muted-foreground">Total Incidents</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">18</div>
                    <div className="text-sm text-muted-foreground">Resolved</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">92%</div>
                    <div className="text-sm text-muted-foreground">Resolution Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Patrol Units & Status */}
          <div className="space-y-6">
            {/* Patrol Units Status */}
            <Card className="card-cultural border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-primary" />
                  <span>Active Patrol Units</span>
                </CardTitle>
                <CardDescription>Real-time patrol unit monitoring</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {patrolUnits.map((unit, index) => (
                  <div key={index} className="p-3 border border-border/50 rounded-lg bg-card/30">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="font-mono">{unit.id}</Badge>
                      <Badge className={`${
                        unit.status === 'Active' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'
                      }`}>
                        {unit.status}
                      </Badge>
                    </div>
                    <h4 className="font-medium text-sm">{unit.officer}</h4>
                    <p className="text-xs text-muted-foreground">{unit.location}</p>
                    <p className="text-xs text-muted-foreground mt-1">Last update: {unit.lastUpdate} ago</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Units
                </Button>
              </CardContent>
            </Card>

            {/* Response Statistics */}
            <Card className="card-cultural border-0">
              <CardHeader>
                <CardTitle>Response Performance</CardTitle>
                <CardDescription>Today's operational metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Average Response Time</span>
                    <span className="font-medium">4.2 min</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  
                  <div className="flex justify-between text-sm">
                    <span>Cases Resolved Today</span>
                    <span className="font-medium">12/15</span>
                  </div>
                  <Progress value={80} className="h-2" />
                  
                  <div className="flex justify-between text-sm">
                    <span>Tourist Safety Score</span>
                    <span className="font-medium text-primary">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <div className="text-xl font-bold text-primary">847</div>
                    <div className="text-xs text-muted-foreground">Active Tourists</div>
                  </div>
                  <div className="p-3 bg-accent/5 rounded-lg">
                    <div className="text-xl font-bold text-accent">23</div>
                    <div className="text-xs text-muted-foreground">Officers On Duty</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-cultural border-0">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-destructive/90 hover:bg-destructive text-destructive-foreground">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Issue Safety Alert
                </Button>
                <Button variant="outline" className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Update Patrol Route
                </Button>
                <Button variant="outline" className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Request Backup
                </Button>
                <Button variant="outline" className="w-full">
                  <Eye className="h-4 w-4 mr-2" />
                  View CCTV Feeds
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliceDashboard;