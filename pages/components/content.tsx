import Link from 'next/link'
import Aside from './aside'
import styles from '/styles/dev.module.css'

export default function Content() {
    return (
        <div className={styles.c_const}>
            <div className={styles.c_body}>

                <div className="c_grid c_col">
                    <Aside/>
                    <div className={styles.c_main}>

                        <div className={styles.c_main_b}>
                            <div className={styles.c_main_bt}>
                                <h1 className={styles.h_color}>สำรวจ</h1>
                                <p className={styles.p_color}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                            </div>
                        </div>

                        <div className={styles.c_main_area}>
                            <h1 className={styles.h_area}>ทั้งหมด</h1>

                            <div className={styles.c_main_area_grid}>
                                <div className={styles.c_main_content_box}>
                                    
                                </div>

                            </div>
                        </div>

                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}