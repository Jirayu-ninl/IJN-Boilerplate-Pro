import { motion } from 'framer-motion'
import Link from 'next/link'

import { home as CSS } from '../styles'

const transition = (delay: number, duration: number) => ({
  delay: delay,
  duration: duration,
})

export default function home() {
  const Init: any = () => ({ visibility: `hidden`, y: 100 })
  const Animated: any = () => ({ visibility: `visible`, y: 0 })

  return (
    <>
      <div className={CSS.heroContainer} style={{ zIndex: 50 }}>
        <div className={CSS.main}>
          <motion.h1
            initial={Init}
            animate={Animated}
            transition={transition(0.3, 0.5)}
          >
            iFramework
          </motion.h1>
          <Link href='https://theiceji.com' passHref>
            <motion.button
              initial={Init}
              animate={Animated}
              transition={transition(0.5, 0.2)}
            >
              Developer website
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  )
}
