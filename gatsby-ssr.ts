import Helmet from 'react-helmet'
import { wrapRootElement as wrap } from './src/components/root-wrapper'

export const wrapRootElement = wrap
export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  const helmet = Helmet.renderStatic()
  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setBodyAttributes(helmet.bodyAttributes.toComponent())
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ])
}

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents()

  headComponents.sort((x, y) => {
    if (x.props && x.props['data-react-helmet']) {
      return -1
    } else if (y.props && y.props['data-react-helmet']) {
      return 1
    }
    return 0
  })

  replaceHeadComponents(headComponents)
}
