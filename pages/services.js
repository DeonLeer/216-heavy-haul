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
            <h1>Services</h1>
            <ul style={{textAlign: 'left'}}>
                {services.map(service => (
                    <li>{service}</li>
                ))}
            </ul>
        </div>
    )
}