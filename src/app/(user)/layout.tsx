// 'use client';

import NavBar from '@/components/navigation/navbar';
import { TopBar } from '@/components/navigation/topbar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import React from 'react';

const Layout = ({
    children
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex flex-row bg-gradient-to-br from-background to-background/95  h-dvh">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel
                    minSize={15}
                    maxSize={30}
                    defaultSize={15}
                    className="bg-box-background/50 backdrop-blur-sm border-r border-box-hover/10"
                >
                    <NavBar />
                </ResizablePanel>
                <ResizableHandle className="w-1 bg-box-hover/10 hover:bg-primary/20 transition-colors" />
                <ResizablePanel defaultSize={85} className="!overflow-y-auto">
                    <div className="flex flex-col p-8 space-y-8 min-h-full">
                        <TopBar />
                        <main className="min-h-0 flex-1">{children}</main>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};

export default Layout;
