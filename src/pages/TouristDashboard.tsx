import { useState } from "react";
import { Shield, AlertTriangle, MapPin, Music, Users, Camera, Play, Volume2, Heart, Eye, EyeOff, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/contexts/AuthContext";
import GeofencingMonitor from "@/components/GeofencingMonitor";
import CulturalModal, { CULTURAL_DATA } from "@/components/CulturalModal";
import traditionalDance from "@/assets/traditional-dance.jpg";
import northeastNature from "@/assets/northeast-nature.jpg";
import traditionalCrafts from "@/assets/traditional-crafts.jpg";

const TouristDashboard = () => {
  const { user, logout } = useAuth();
  const [showBlockchainId, setShowBlockchainId] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [sosActive, setSosActive] = useState(false);
  const [currentSong, setCurrentSong] = useState<number | null>(null);
  const [selectedCulturalItem, setSelectedCulturalItem] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const folkSongs = [
    { name: "Bihu Geet", region: "Assam", description: "Traditional spring festival song" },
    { name: "Lai Haraoba", region: "Manipur", description: "Ancient ritualistic song" },
    { name: "Ka Pom-Blang Nongkrem", region: "Meghalaya", description: "Harvest celebration melody" },
    { name: "Cheraw Song", region: "Mizoram", description: "Bamboo dance accompaniment" }
  ];

  const folkDances = [
    { name: "Bihu Dance", region: "Assam", performers: "Groups", season: "Spring" },
    { name: "Manipuri Dance", region: "Manipur", performers: "Solo/Group", season: "All" },
    { name: "Nongkrem Dance", region: "Meghalaya", performers: "Community", season: "Autumn" },
    { name: "Cheraw Dance", region: "Mizoram", performers: "Group", season: "Festival" }
  ];

  const nearbyAttractions = [
    { name: "Kaziranga National Park", distance: "45 km", type: "Wildlife", rating: 4.8 },
    { name: "Majuli Island", distance: "32 km", type: "Cultural", rating: 4.6 },
    { name: "Kamakhya Temple", distance: "12 km", type: "Religious", rating: 4.7 },
    { name: "Shillong Peak", distance: "78 km", type: "Natural", rating: 4.5 }
  ];

  const handleSOS = () => {
    setSosActive(true);
    // Simulate SOS activation
    setTimeout(() => setSosActive(false), 5000);
  };

  const revealBlockchainId = () => {
    if (verificationCode === "1234") { // Demo verification
      setShowBlockchainId(true);
    } else {
      alert("Invalid verification code");
    }
  };

  const openCulturalModal = (itemId: string) => {
    const item = CULTURAL_DATA.find(item => item.id === itemId);
    if (item) {
      setSelectedCulturalItem(item);
      setModalOpen(true);
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-background pattern-tribal">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">Tourist Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome to North East India</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
              Location: Guwahati, Assam
            </Badge>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Emergency & Quick Actions */}
          <div className="space-y-6">
            {/* SOS Emergency */}
            <Card className={`card-cultural border-0 ${sosActive ? 'bg-destructive/10 animate-pulse' : ''}`}>
              <CardHeader className="text-center pb-4">
                <CardTitle className="flex items-center justify-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                  <span>Emergency SOS</span>
                </CardTitle>
                <CardDescription>
                  {sosActive ? "SOS ACTIVATED - Help is on the way!" : "Press for immediate assistance"}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  onClick={handleSOS}
                  className={`w-full py-8 text-lg font-bold ${sosActive ? 'bg-destructive' : 'bg-destructive/90 hover:bg-destructive'}`}
                  disabled={sosActive}
                >
                  {sosActive ? "SOS ACTIVE" : "EMERGENCY SOS"}
                </Button>
                {sosActive && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Location shared with nearest police station
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Geofencing Monitor */}
            <GeofencingMonitor />

            {/* Blockchain ID */}
            <Card className="card-cultural border-0">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Blockchain Safety ID</span>
                </CardTitle>
                <CardDescription>Secure digital identity verification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!showBlockchainId ? (
                  <div className="space-y-3">
                    <Label htmlFor="verification">Enter last 4 digits of Aadhar/Passport:</Label>
                    <Input
                      id="verification"
                      type="password"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      maxLength={4}
                      placeholder="****"
                    />
                    <Button onClick={revealBlockchainId} className="w-full" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      Reveal Blockchain ID
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                      <p className="text-sm font-medium">Your Blockchain ID:</p>
                      <p className="font-mono text-primary">BLK-NE-TOUR-001-ASAM</p>
                    </div>
                    <Button 
                      onClick={() => setShowBlockchainId(false)} 
                      className="w-full" 
                      variant="outline"
                      size="sm"
                    >
                      <EyeOff className="h-4 w-4 mr-2" />
                      Hide ID
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Cultural Content */}
          <div className="space-y-6">
            {/* Cultural Heritage */}
            <Card className="card-cultural border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Music className="h-5 w-5 text-accent" />
                  <span>Folk Songs of North East</span>
                </CardTitle>
                <CardDescription>Traditional melodies from across the region</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {folkSongs.map((song, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 bg-accent/5 rounded-lg cursor-pointer hover:bg-accent/10 transition-colors"
                    onClick={() => openCulturalModal('bihu-geet')}
                  >
                    <div className="flex-1">
                      <h4 className="font-medium">{song.name}</h4>
                      <p className="text-sm text-muted-foreground">{song.region} • {song.description}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSong(currentSong === index ? null : index);
                      }}
                    >
                      {currentSong === index ? <Volume2 className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Folk Dances */}
            <Card className="card-cultural border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Traditional Dances</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {folkDances.map((dance, index) => (
                    <div 
                      key={index} 
                      className="text-center p-3 bg-primary/5 rounded-lg cursor-pointer hover:bg-primary/10 transition-colors"
                      onClick={() => openCulturalModal('manipuri-dance')}
                    >
                      <h4 className="font-medium text-sm">{dance.name}</h4>
                      <p className="text-xs text-muted-foreground">{dance.region}</p>
                      <Badge variant="outline" className="mt-1 text-xs">{dance.performers}</Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <img 
                    src={traditionalDance} 
                    alt="Traditional Dance" 
                    className="w-full h-32 object-cover rounded-lg shadow-cultural cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openCulturalModal('manipuri-dance')}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Cultural Richness */}
            <Card className="card-cultural border-0">
              <CardHeader>
                <CardTitle>Cultural Diversity</CardTitle>
                <CardDescription>Discover the rich heritage of North East India</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">200+</div>
                    <div className="text-xs text-muted-foreground">Tribal Groups</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">150+</div>
                    <div className="text-xs text-muted-foreground">Languages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">50+</div>
                    <div className="text-xs text-muted-foreground">Festivals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">8</div>
                    <div className="text-xs text-muted-foreground">States</div>
                  </div>
                </div>
                <img 
                  src={traditionalCrafts} 
                  alt="Traditional Crafts" 
                  className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openCulturalModal('bamboo-crafts')}
                />
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Attractions & Information */}
          <div className="space-y-6">
            {/* Nearby Attractions */}
            <Card className="card-cultural border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>Nearby Attractions</span>
                </CardTitle>
                <CardDescription>Discover amazing places around you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {nearbyAttractions.map((attraction, index) => (
                  <div 
                    key={index} 
                    className="p-3 bg-card border border-border/50 rounded-lg cursor-pointer hover:bg-accent/5 transition-colors"
                    onClick={() => openCulturalModal('kaziranga')}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium">{attraction.name}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">{attraction.type}</Badge>
                          <span className="text-xs text-muted-foreground">{attraction.distance}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4 fill-accent text-accent" />
                        <span className="text-sm font-medium">{attraction.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4">
                  <Camera className="h-4 w-4 mr-2" />
                  View All Attractions
                </Button>
              </CardContent>
            </Card>

            {/* Travel Safety History */}
            <Card className="card-cultural border-0">
              <CardHeader>
                <CardTitle>Travel History</CardTitle>
                <CardDescription>Your recent journeys</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { location: "Kaziranga", date: "Dec 8", status: "Completed" },
                  { location: "Shillong", date: "Dec 5", status: "Completed" },
                  { location: "Tawang", date: "Dec 1", status: "Completed" }
                ].map((trip, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border-l-4 border-primary/30 pl-3">
                    <div>
                      <p className="font-medium text-sm">{trip.location}</p>
                      <p className="text-xs text-muted-foreground">{trip.date}</p>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary">{trip.status}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Flora & Fauna */}
            <Card className="card-cultural border-0">
              <CardHeader>
                <CardTitle>Biodiversity Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src={northeastNature} 
                  alt="North East Nature" 
                  className="w-full h-32 object-cover rounded-lg mb-3 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openCulturalModal('red-panda')}
                />
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-center p-2 bg-primary/5 rounded">
                    <div className="font-bold text-primary">3,000+</div>
                    <div className="text-xs text-muted-foreground">Plant Species</div>
                  </div>
                  <div className="text-center p-2 bg-accent/5 rounded">
                    <div className="font-bold text-accent">500+</div>
                    <div className="text-xs text-muted-foreground">Bird Species</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Home to red pandas, one-horned rhinoceros, and countless endemic species
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Cultural Modal */}
      <CulturalModal 
        item={selectedCulturalItem}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default TouristDashboard;