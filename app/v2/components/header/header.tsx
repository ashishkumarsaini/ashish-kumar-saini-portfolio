export const Header = () => {
  return (
    <header>
      <div className="px-4">
        <div className="h-header-height flex items-center justify-between">
          <p className="text-primary text-base">
            Web Developer & Engineer
          </p>
          <nav>
            <ul className="flex items-center gap-6">
              <li className="text-primary text-base hover:transform-3d">What I Do</li>
              <li className="text-primary text-base hover:transform-3d">My Projects</li>
              <li className="text-primary text-base hover:transform-3d">Skills</li>
              <li className="text-primary text-base hover:transform-3d">Contact Me</li>
            </ul>
          </nav>
        </div>
      </div>
    </header >
  )
}