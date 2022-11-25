import Link from 'next/link'
import styles from '/styles/dev.module.css'

export default function Aside() {
    return (
        <div className={styles.aside_const}>
            <div className={styles.aside_body}>
                <Link href='/'><i className="fa-solid fa-house"></i> หน้าแรก</Link>
                <Link href='/latest'><i className="fa-regular fa-clock"></i> ล่าสุด</Link>
                <Link href='/artists'><i className="fa-solid fa-user-group"></i> ศิลปิน</Link>
                <Link href='/search'><i className="fa-solid fa-magnifying-glass"></i> ค้นหา</Link>
                <Link href='/download'><i className="fa-solid fa-download"></i> ดาวน์โหลด</Link>
            </div>
        </div>
    )
}