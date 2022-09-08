import styles from '../styles/about.module.css'


export default function About(props) {
    
    return (
        <div style={{textAlign: 'center'}}>
            <h1>About Us</h1>
            <p className={styles.about}>
                216 Heavy Haul is a group of companies that can “get it done” in any location. We will take on any challenge remote or local. With cranes and trucks there is a large scope of works we are willing to take on.
            </p>
            <p className={styles.about}>
                Our mission is to offer construction solutions to any geographics we can reach. We have a large resource pool to draw from with project management and skilled to mid labour services. This includes large and small projects from Vancouver to Inuvik.
            </p>
        </div>
    )
}