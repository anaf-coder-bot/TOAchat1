import './App.css'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react'

function App() {

  return (
    <>
      <h1>Hello</h1>
      <header>
        <SignedOut>
          <SignInButton mode='modal' />
          <SignUpButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </>
  )
}

export default App
