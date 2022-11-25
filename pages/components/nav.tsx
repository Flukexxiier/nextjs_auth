import Link from 'next/link'
import { useState } from 'react'
import styles from '/styles/dev.module.css'

export default function Nav() {

  const [srToggle, setsrToggle] = useState(false)
  
  return (
    <div className={styles.container}>
      <div className={styles.fix}>
        <div className={styles.nv_bg}>
          <div className={styles.nv_body}>

            <div className={styles.nv_grid}>

              <div className={styles.nv_lft}>
                <span className={styles.web_logo}>
                  {/* <Link href='/'><Image src={product} alt='/' width={50} height={50} /></Link> */}
                  <Link href='/'><i className="fa-solid fa-play"></i></Link>
                  <div className={styles.web_heading}>
                    <Link href='/'>Music</Link>
                    {/* <span className={styles.web_desc}>สาขาอุดรธานี</span> */}
                  </div>
                </span>
              </div>

              <div className={srToggle ? "nv_sr" : 'nv_active'} id="nv_sr" onClick={() =>setsrToggle(!srToggle)}>
                <div className={styles.nv_sr_icon} id="nv_sr_icon"><i className="fa-solid fa-magnifying-glass"></i></div>
                <div className={styles.sr_content}>
                  <input type="search" className={styles.compo_int_sr} id="value" placeholder="ค้นหา..." autoFocus/>
                </div>
              </div>
              
              <div className={styles.rft}>
                <Link href='../account/' className={styles.log_content}><i className="fa-solid fa-right-to-bracket"></i> เข้าสู่ระบบ</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}