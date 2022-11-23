import React from 'react'
import { useLocation } from 'react-router-dom'

interface props {
  contentId: string
}

export const ContentWall: React.FC<props> = ({ contentId }) => {
  const location = useLocation()
  React.useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://go.arena.im/public/js/arena.widget.embed.lib.js`
    script.async = true
    document.body.appendChild(script)
    const loadingDiv = document.getElementById(
      'arena--initial-widget-loading-0'
    )
    loadingDiv?.remove()
    return () => {
      document.body.removeChild(script)
    }
  }, [location])

  return (
    <>
      <div
        className="arena-embed-widget"
        data-publisher="arenabteodosio"
        data-type="social-wall"
        data-showtitle="true"
        data-lang="pt-br"
        data-timeline={contentId}
      ></div>
    </>
  )
}
