'use client';

import { useState } from 'react';
import { StoredBlobsList } from './list';
import { NewShape } from './new-shape';

export function ShapeEditor(props) {
    // Allow new shape editor to signal that a mutation has occured, triggering the list
    // of stored blobs to be reloaded (you can also use form actions)
    const [lastMutationTime, setLastMutationTime] = useState(0);

    return (
        <div className="flex w-full flex-col md:flex-row md:items-start gap-8">
            <div className="md:w-2/5">
                <NewShape setLastMutationTime={setLastMutationTime} />
            </div>
            <div className='w-full'>
                <StoredBlobsList lastMutationTime={lastMutationTime} />
            </div>
        </div>
    );
}
