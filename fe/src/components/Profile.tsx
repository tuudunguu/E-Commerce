import React from 'react';

// Define the types for the component's props
interface ProfileProps {
  username: string;
  imageUrl: string;
  fallbackText: string;
}

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Define the Profile component using the ProfileProps type
export const Profile: React.FC<ProfileProps> = ({
  username,
  imageUrl,
  fallbackText,
}) => {
  return (
    <Sheet>
      {/* Wrapping SheetTrigger in a span to avoid TypeScript error */}
      <SheetTrigger asChild>
        <span>
          <Avatar>
            <AvatarImage src={imageUrl} />
            <AvatarFallback>{fallbackText}</AvatarFallback>
          </Avatar>
        </span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Welcome, {username}!</SheetTitle>
          <SheetDescription>This is your profile sheet.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
