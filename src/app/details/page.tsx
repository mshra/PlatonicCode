"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useCallback, useState } from "react";
import Cropper from "react-easy-crop";

export default function ProfileEditor() {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [cropDialogOpen, setCropDialogOpen] = useState(false);

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      // We'll use this later for cropping the image
      console.log(croppedArea, croppedAreaPixels);
    },
    [],
  );

  const handleProfilePictureChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setCropDialogOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropImage = () => {
    if (image) {
      // Here you would typically send the cropped image data to your backend
      // For this example, we'll just set it as the cropped image
      setCroppedImage(image);
      setCropDialogOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Submitting profile:", {
      username,
      profilePicture: croppedImage,
    });
    // You can add your API call or state update logic here
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Enter details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="profile-picture">Profile Picture</Label>
              <Input
                id="profile-picture"
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                className="cursor-pointer"
              />
            </div>
            {croppedImage && (
              <div className="flex justify-center">
                <Avatar className="w-24 h-24">
                  <AvatarImage
                    src={croppedImage}
                    alt="Profile picture preview"
                  />
                  <AvatarFallback>Preview</AvatarFallback>
                </Avatar>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" onClick={handleSubmit}>
            Save Profile
          </Button>
        </CardFooter>

        <Dialog open={cropDialogOpen} onOpenChange={setCropDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Crop Profile Picture</DialogTitle>
            </DialogHeader>
            <div className="relative w-full h-64">
              {image && (
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              )}
            </div>
            <div className="py-4">
              <Label htmlFor="zoom">Zoom</Label>
              <Slider
                id="zoom"
                min={1}
                max={3}
                step={0.1}
                value={[zoom]}
                onValueChange={(value) => setZoom(value[0])}
              />
            </div>
            <Button onClick={handleCropImage}>Crop Image</Button>
          </DialogContent>
        </Dialog>
      </Card>
    </div>
  );
}
