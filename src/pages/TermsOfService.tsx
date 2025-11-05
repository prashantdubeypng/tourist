import { Shield, ArrowLeft, AlertTriangle, Users, Gavel, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const TermsOfService = () => {
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
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground text-lg">
            Legal terms and conditions for using NE Tourist Safety System
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Last updated: September 12, 2025
          </p>
        </div>

        <div className="space-y-6">
          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Gavel className="h-5 w-5 text-primary" />
                <span>Acceptance of Terms</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By accessing and using the NE Tourist Safety System, you accept and agree to be bound by 
                these Terms of Service. If you do not agree to these terms, please do not use our services. 
                These terms apply to all users including tourists, police personnel, transport operators, 
                and system administrators.
              </p>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-secondary" />
                <span>User Responsibilities</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Tourist Users</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Provide accurate identity information (Blockchain ID, Aadhaar/Passport)</li>
                  <li>Use emergency features only for genuine emergencies</li>
                  <li>Respect local customs and cultural sites</li>
                  <li>Follow safety guidelines and geofencing alerts</li>
                  <li>Report suspicious activities or safety concerns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Police & Authorities</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Respond promptly to emergency alerts within jurisdiction</li>
                  <li>Maintain confidentiality of tourist data</li>
                  <li>Use system data only for legitimate safety purposes</li>
                  <li>Update incident records accurately and timely</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Transport Operators</h4>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Maintain valid permits and insurance documentation</li>
                  <li>Ensure vehicle safety standards compliance</li>
                  <li>Report route changes and passenger capacity accurately</li>
                  <li>Cooperate with safety monitoring systems</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-accent" />
                <span>Prohibited Activities</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>False emergency alerts or misuse of SOS features</li>
                <li>Sharing login credentials or unauthorized system access</li>
                <li>Attempting to bypass geofencing or security measures</li>
                <li>Using the system for illegal activities or harassment</li>
                <li>Interfering with emergency response operations</li>
                <li>Reverse engineering or compromising system security</li>
                <li>Spreading misinformation about safety conditions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle>Emergency Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">SOS Functionality</h4>
                <p className="text-muted-foreground mb-2">
                  The SOS feature is designed to alert authorities in genuine emergencies. 
                  By using this feature, you consent to:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Immediate location sharing with emergency responders</li>
                  <li>Recording of emergency communications</li>
                  <li>Potential involvement of multiple emergency services</li>
                  <li>Follow-up contact for incident documentation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Response Times</h4>
                <p className="text-muted-foreground">
                  While we strive for rapid emergency response, actual response times may vary based on 
                  location, weather conditions, and resource availability. The system is a tool to assist 
                  emergency services but does not guarantee specific response times.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle>Liability & Disclaimers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Service Availability</h4>
                <p className="text-muted-foreground">
                  The system operates 24/7 but may experience downtime for maintenance or due to 
                  technical issues. We are not liable for damages resulting from service interruptions, 
                  though we commit to minimizing such occurrences.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cultural Information</h4>
                <p className="text-muted-foreground">
                  Cultural content and recommendations are provided for informational purposes. 
                  Users should verify local customs, entry requirements, and cultural sensitivities 
                  independently before visiting cultural sites.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We reserve the right to suspend or terminate access for users who violate these terms. 
                Terminated users may lose access to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Emergency alert capabilities</li>
                <li>Cultural exploration features</li>
                <li>Safety monitoring services</li>
                <li>Historical travel data (except legally required records)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                For questions about these terms or to report violations:
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
                  <span className="text-muted-foreground">Legal Department, NE Tourist Safety System</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;