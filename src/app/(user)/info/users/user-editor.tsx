'use client';

import { Position } from '@prisma/client';
import { useState } from 'react';

import { SingleCombobox } from '@/components/meta-components/combobox';
import { POSITION_NAMES, POSITIONS } from '@/db/types';

import { getPosition, updatePosition } from './users';

interface UserEditorProps {
    adminId: string;
    email: string | null;
    position: Position | null;
}

enum Status {
    Ok,
    Saving,
    Checking,
    Error,
}

export function UserEditor({ adminId, email, position }: UserEditorProps) {
    const [uiPosition, setUiPosition] = useState<Position | undefined>(position ?? undefined);
    const [status, setStatus] = useState(Status.Ok);

    return (
        <div className="bg-box-background flex items-center gap-main p-2 rounded-sm">
            <p className="w-full px-2">{email || 'no-email'}</p>
            {status === Status.Ok ? (
                <SingleCombobox<Position>
                    currentKey={uiPosition ?? null}
                    selectKey={(position) => {
                        setStatus(Status.Saving);
                        updatePosition(adminId, position).then(() => {
                            setStatus(Status.Checking);
                            getPosition(adminId).then((position) => {
                                if (position) {
                                    setUiPosition(position);
                                    setStatus(Status.Ok);
                                } else {
                                    setStatus(Status.Error);
                                }
                            });
                        });
                    }}
                    emptyMessage="Mauvaise position"
                    placeholder="Sélectionnez une position"
                    title="Sélectionnez une position"
                    toString={(item: Position) => POSITIONS[item].display['other'] as string}
                    items={POSITION_NAMES}
                />
            ) : status === Status.Saving ? (
                <p className="w-full py-2">Saving...</p>
            ) : status === Status.Checking ? (
                <p className="w-full py-2">Checking...</p>
            ) : (
                <p className="w-full py-2">An error occurred.</p>
            )}
        </div>
    );
}
