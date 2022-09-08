import styles from '../styles/about.module.css'
import Image from 'next/image'

export default function About(props) {
    
    return (
        <div className={styles.aboutMain} style={{textAlign: 'center', height: '100vh'}}>
            <div style={{position: 'absolute', top: 0, left: 0, zIndex: -10}}>
                <Image src='/crane3.jpg' height={711} width={1920}/>
            </div>
            <h1 style={{color:'white'}}>About Us</h1>
            <h2 className={styles.about}>
                216 Heavy Haul is a group of companies that can “get it done” in any location. We will take on any challenge remote or local. With cranes and trucks there is a large scope of works we are willing to take on.
            </h2>
            <h2 className={styles.about}>
                Our mission is to offer construction solutions to any geographics we can reach. We have a large resource pool to draw from with project management and skilled to mid labour services. This includes large and small projects from Vancouver to Inuvik.
            </h2>
        </div>
    )
}