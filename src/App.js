import React from 'react'

function App() {
  return (
    <>
      {/* Main Frame */}
      <div className='main-frame'>
        {/* Header */}
        <header className='header'>Header</header>
        {/* Navogation */}
        <nav className='nav'>navigation</nav>
        {/* Main content + Sidebar */}
        <div className='flex'>
          {/* Main content */}
          <div className='main-content'>
            main content
            <div className='article p-14'> article</div>
            <div className='article p-12'> article</div>
            <div className='article p-10'> article</div>
            <div className='article p-8'> article</div>
          </div>
          {/* Sidebar */}
          <div className='sidebar'>sidebar</div>
        </div>
        {/* Footer */}
        <footer className='footer'>footer</footer>
      </div>
    </>
  )
}

export default App
