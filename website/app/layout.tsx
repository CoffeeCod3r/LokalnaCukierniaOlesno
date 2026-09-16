import type { Metadata } from 'next';
import './globals.css';
import {assetPath} from '@/lib/assets';
export const metadata: Metadata = {title:'Cukiernia Wrocławska Olesno | Torty, ciasta i wypieki',description:'Cukiernia Wrocławska w Oleśnie. Torty na zamówienie, ciasta i wypieki na rodzinne uroczystości i wyjątkowe okazje. Skontaktuj się z nami.',icons:{icon:assetPath('/favicon.svg')}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pl"><body>{children}</body></html>}

