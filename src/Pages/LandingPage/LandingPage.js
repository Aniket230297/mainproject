
import Button from '../../Components/Common/Buttons/Button.js'
import phone from '../../Components/assets/phone.png'
import gradient from '../../Components/assets/gradient.png'
import { motion } from 'framer-motion';
import './style.css';

function Landingpage() {
  return (
    <div className='landing-flex'>
        <div className='left-div'>
            <h1 className='crypto-heading'>Track Crypto</h1>
            <h1 className='real-time-heading'>Real Time.</h1>
            <p>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
        
            <div className='btn-flex'>
                <Button  text={"Dashboard"}/>
                <Button  text={"Share"} outlined={true}/>
            </div>
        </div>

        <div className='right-div'>
          <motion.img src={phone} alt='phone' className='phoneImg'
          initial={{y:-30}} 
          animate={{y:30}}
          transition={{
            type:"smooth",
            repeatType:'mirror',
            duration: 2,
            repeat:Infinity
          }}  
          />
          <img  src={gradient} alt='gradientImg' className='gradientimg'/>
        </div>
    </div>
  )
}

export default Landingpage;