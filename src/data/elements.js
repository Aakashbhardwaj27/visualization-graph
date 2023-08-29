const elements = [
    { data: { id: 'node1', label: 'Node 1', entity: 'entityA' } },
    { data: { id: 'node2', label: 'Node 2', entity: 'entityB' } },
    { data: { id: 'node3', label: 'Node 3', entity: 'entityC' } },
    { data: { id: 'node4', label: 'Node 4', entity: 'entityD' } },
    { data: { id: 'node5', label: 'Node 5', entity: 'entityE' } },
    { data: { id: 'node6', label: 'Node 6', entity: 'entityF' } },
    {
        data: {
            id: 'edge1',
            source: 'node1',
            target: 'node2',
            label: 'Connection 1',
        },
    },
    {
        data: {
            id: 'edge2',
            source: 'node2',
            target: 'node3',
            label: 'Connection 2',
        },
    },
    {
        data: {
            id: 'edge3',
            source: 'node2',
            target: 'node4',
            label: 'Connection 3',
        },
    },
    {
        data: {
            id: 'edge4',
            source: 'node2',
            target: 'node5',
            label: 'Connection 4',
        },
    },
    {
        data: {
            id: 'edge5',
            source: 'node2',
            target: 'node6',
            label: 'Connection 5',
        },
    },
]

export default elements
