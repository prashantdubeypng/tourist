import { Shield, ArrowLeft, Users, Lock, Database, Globe, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pattern-mountain">
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold bg-gradient-cultural bg-clip-text text-transparent">
                NE Tourist Safety
              </span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg">
            How we protect and handle your personal information
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Last updated: September 12, 2025
          </p>
        </div>

        <div className="space-y-6">
          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Information We Collect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Personal Information</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Blockchain ID for secure identity verification</li>
                  <li>Last 4 digits of Aadhaar/Passport for authentication</li>
                  <li>Location data for safety monitoring and emergency response</li>
                  <li>Device information for optimal app performance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Usage Data</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Emergency alert patterns and response times</li>
                  <li>Cultural exploration activities and preferences</li>
                  <li>Travel routes and safety checkpoints visited</li>
                  <li>App interaction logs for security monitoring</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-accent" />
                <span>How We Use Your Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Emergency Response:</strong> Immediate location sharing with authorized personnel during SOS situations</li>
                <li><strong>Safety Monitoring:</strong> Geofencing alerts when entering restricted or unsafe areas</li>
                <li><strong>Cultural Recommendations:</strong> Personalized suggestions based on your interests and location</li>
                <li><strong>Service Improvement:</strong> Analytics to enhance app functionality and user experience</li>
                <li><strong>Communication:</strong> Important safety alerts and system notifications</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-secondary" />
                <span>Data Storage & Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Blockchain Security</h4>
                <p className="text-muted-foreground">
                  All personal data is encrypted and stored on secure blockchain infrastructure, 
                  ensuring immutable security records and preventing unauthorized access.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Retention</h4>
                <p className="text-muted-foreground">
                  Emergency data is retained for 7 years for safety analysis. 
                  General usage data is anonymized after 2 years. 
                  You can request data deletion at any time.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>Data Sharing</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Emergency Situations</h4>
                <p className="text-muted-foreground">
                  Location and identity data may be shared with police, medical services, 
                  and authorized rescue personnel only during active emergency situations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Third-Party Services</h4>
                <p className="text-muted-foreground">
                  We never sell personal data. Limited anonymized data may be shared with 
                  tourism boards and cultural institutions to improve Northeast India tourism infrastructure.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Access:</strong> Request a copy of all data we have about you</li>
                <li><strong>Correction:</strong> Update or correct any inaccurate information</li>
                <li><strong>Deletion:</strong> Request removal of your data (except legally required emergency records)</li>
                <li><strong>Portability:</strong> Export your data in a standard format</li>
                <li><strong>Opt-out:</strong> Disable non-essential data collection features</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                For privacy-related questions or to exercise your rights, contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:dishantvaswani7@gmail.com" className="text-primary hover:underline">
                    dishantvaswani7@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Privacy Officer, NE Tourist Safety System</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;