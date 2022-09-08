export default function Services(props) {
    const services = [
        'Pile Driving - Sheet Piles, Steel Pipe, H Pile',
        'Crane Services- Erections, Taxi (RT/AT/Crawler).',
        'Trucking- Deck Trucks, Low Beds.',
        'Material Transfer- Dump Boxes, Tanks, Fluids.',
        'Site Services- Clean Up & Remediation.',
        'Civil Work- Underground, Shoring, Foundations.',
    ]
    return (
        <div style={{textAlign: 'center'}}>
            <div style={{height: '130px', width: '100%', backgroundColor: '#191b4b', position: 'absolute', top: 0, left: 0}}/>
            <h1>Services</h1>
            <ul style={{textAlign: 'left'}}>
                {services.map(service => (
                    <li>{service}</li>
                ))}
            </ul>
        </div>
    )
}