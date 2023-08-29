import CytoscapeComponent from 'react-cytoscapejs'
import elements from '../data/elements'

const layoutOptions = {
    name: 'grid',
}

const GraphVisualization = () => {
    return (
        <div style={{ height: '800px', width: '100%' }}>
            <CytoscapeComponent
                elements={elements}
                layout={layoutOptions}
                style={{ width: '100%', height: '100%' }}
                cy={(cy) => {
                    cy.on('click', 'node', (event) => {
                        const node = event.target
                        cy.fit(node) // Zoom to selected node
                    })
                }}
            />
        </div>
    )
}

export default GraphVisualization
