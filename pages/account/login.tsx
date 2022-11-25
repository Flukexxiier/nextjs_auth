import Link from 'next/link'
import styles from '/styles/dev.module.css'
import { createClient } from '@supabase/supabase-js'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useNavigate } from 'react-router-dom'

const supabase = createClient(
    "https://xbcoqadbxpuyyyqrjccw.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiY29xYWRieHB1eXl5cXJqY2N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkzOTE3MDcsImV4cCI6MTk4NDk2NzcwN30.StQLJ6f-fkvLtB1satQ3Yjk7xihxuuHyhoM5i9UOxrI"
);

export default function Login() {

    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        if(event !== "SIGNED_OUT") {
            navigate("./success");
        } else {
            navigate("/");
        }
    })

    return (
        <div className="App">
            <header className="App-header">
                <Auth
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    theme="dark"
                    providers={["facebook" , "apple"]}
                />
            </header>
        </div>
    )
}