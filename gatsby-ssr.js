import { Helmet } from "react-helmet"

export default onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([...SEO()])
}
function SEO() {
  const helmet = Helmet.renderStatic()
  return [
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ]
}
