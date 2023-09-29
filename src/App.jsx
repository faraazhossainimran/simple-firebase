import './App.css'
function App() {
  const handleGoogleSignIn = () => {
   console.log('hi');
  }  
  return (
    <>
      <h1>Firebase + React</h1>
      <button onClick={handleGoogleSignIn}>Google Sign in</button>
    </>
  )
}

export default App
