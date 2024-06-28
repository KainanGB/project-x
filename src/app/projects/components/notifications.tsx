import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/shared/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuItem
} from '@/shared/components/ui/dropdown-menu';
import { Button } from '@/shared/components/ui/button';
import { CheckIcon, XIcon } from 'lucide-react';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export default function Notification() {
  const [showAll, setShowAll] = useState(true);
  const [showWebsite, setShowWebsite] = useState(true);
  const [showDocs, setShowDocs] = useState(true);
  const [showDashboard, setShowDashboard] = useState(true);
  const [showMobileApp, setShowMobileApp] = useState(true);
  const [showMarketingSite, setShowMarketingSite] = useState(true);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread notifications.</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={showAll ? 'default' : 'outline'} size="sm">
                  All
                  <ChevronDownIcon className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuCheckboxItem
                  checked={showAll}
                  onCheckedChange={(checked) => {
                    setShowAll(checked);
                    setShowWebsite(checked);
                    setShowDocs(checked);
                    setShowDashboard(checked);
                    setShowMobileApp(checked);
                    setShowMarketingSite(checked);
                  }}>
                  All
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showWebsite}
                  onCheckedChange={(checked) => setShowWebsite(checked)}>
                  Website
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showDocs}
                  onCheckedChange={(checked) => setShowDocs(checked)}>
                  Docs
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showDashboard}
                  onCheckedChange={(checked) => setShowDashboard(checked)}>
                  Dashboard
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showMobileApp}
                  onCheckedChange={(checked) => setShowMobileApp(checked)}>
                  Mobile App
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showMarketingSite}
                  onCheckedChange={(checked) => setShowMarketingSite(checked)}>
                  Marketing Site
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="max-h-[190px] overflow-auto">
        {showWebsite && (
          <div className="mb-4 pb-4 last:mb-0 last:border-b-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">
                  Your project "Acme Website" has been deployed.
                </p>
                <p className="mt-1 text-sm text-muted-foreground block">5 min ago</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <CheckIcon className="w-4 h-4 mr-2" />
                  Accept
                </Button>
                <Button variant="outline" size="sm">
                  <XIcon className="w-4 h-4 mr-2" />
                  Deny
                </Button>
              </div>
            </div>
          </div>
        )}
        {showMobileApp && (
          <div className="mb-4 pb-4 last:mb-0 last:border-b-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">
                  Your project "Acme Website" has been deployed.
                </p>
                <p className="mt-1 text-sm text-muted-foreground block">5 min ago</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <CheckIcon className="w-4 h-4 mr-2" />
                  Accept
                </Button>
                <Button variant="outline" size="sm">
                  <XIcon className="w-4 h-4 mr-2" />
                  Deny
                </Button>
              </div>
            </div>
          </div>
        )}
        {showDashboard && (
          <div className="mb-4 pb-4 last:mb-0 last:border-b-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">
                  Your project "Acme Website" has been deployed.
                </p>
                <p className="mt-1 text-sm text-muted-foreground block">5 min ago</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <CheckIcon className="w-4 h-4 mr-2" />
                  Accept
                </Button>
                <Button variant="outline" size="sm">
                  <XIcon className="w-4 h-4 mr-2" />
                  Deny
                </Button>
              </div>
            </div>
          </div>
        )}
        {showDocs && (
          <div className="mb-4 pb-4 last:mb-0 last:border-b-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">
                  Your project "Acme Website" has been deployed.
                </p>
                <p className="mt-1 text-sm text-muted-foreground block">5 min ago</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <CheckIcon className="w-4 h-4 mr-2" />
                  Accept
                </Button>
                <Button variant="outline" size="sm">
                  <XIcon className="w-4 h-4 mr-2" />
                  Deny
                </Button>
              </div>
            </div>
          </div>
        )}
        {showMarketingSite && (
          <div className="mb-4 pb-4 last:mb-0 last:border-b-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">
                  Your project "Acme Website" has been deployed.
                </p>
                <p className="mt-1 text-sm text-muted-foreground block">5 min ago</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <CheckIcon className="w-4 h-4 mr-2" />
                  Accept
                </Button>
                <Button variant="outline" size="sm">
                  <XIcon className="w-4 h-4 mr-2" />
                  Deny
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
