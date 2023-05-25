export const dynamic = "force-dynamic";
import './globals.css'
import Header from './component/Header'
import Navbar from './component/Navbar'
import Providers from './Providers'
import SearchBox from './component/SearchBox'


export const metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb Clone devloped by Musab Hassan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {/* <Navbar /> */}
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
          
      </body>
    </html>
  )
}
